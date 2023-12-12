// Gettign the Newly created Mongoose Model we just created 
var {User} = require('../db/models/User.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { recoveryMailService } = require('./recoveryMailer.js');


// Async function to get the User List
exports.getUsers = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {

        var Users = await User.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Users;

    } catch (e) {
        // return a Error message describing the reason 
        throw Error('Error while Paginating Users');
    }
}

exports.createUser = async function (user) {
    // Creating a new Mongoose Object by using the new keyword
    var hashedPassword = bcrypt.hashSync(user.password, 10);
    
    var newUser = new User({
        name: user.name,
        lastName: user.lastName,
        phone: user.phone,
        email: user.email,
        date: new Date(),
        password: hashedPassword
    })

    try {
        // Saving the User 
        var savedUser = await newUser.save();
        var token = jwt.sign({
            id: savedUser._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        return token;
    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)    
        throw Error("Error while Creating User")
    }
}


exports.loginUser = async function (user) {

    // Creating a new Mongoose Object by using the new keyword
    try {
        // Find the User 

        var _details = await User.findOne({
            email: user.email
        });

        var passwordIsValid = bcrypt.compareSync(user.password, _details.password);
        
        if (!passwordIsValid) return 0;

        var token = jwt.sign({
            id: _details._id
        }, process.env.SECRET, {
            expiresIn: 86400 // expires in 24 hours
        });
        
        return {token:token, user:_details};
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Login User")
    }

}


exports.sendRecoveryEmail = async function (email, code) {

    try {
       // Configuración del transporte (SMTP)
    // Opciones del correo
    const mailOptions = {
        from: "contrarecupero742@gmail.com",
        to: "contrarecupero742@gmail.com", // {email}    // Dirección de correo del usuario a recuperar
        subject: 'Solicitud de clase',
        html: `<h1>Este es el codigo: ${code}</h1>` // Cuerpo del mensaje
    };

    // Enviar el correo
    console.log("Enviando correo...");
    const msg = await recoveryMailService.sendMail(mailOptions);
    console.log("Correo enviado con éxito");

    return;
} catch (e) {
    throw Error(e.message);
}
}


exports.recoveryUpdatePassword = async function (email, password) {
    // Creating a new Mongoose Object by using the new keyword

    var hashedPassword = bcrypt.hashSync(password, 10);
    try {
        // Find the User 
        var _details = await User.findOne({
            email: email
        });

        _details.password = hashedPassword;
        var savedUser = await _details.save();
        return savedUser;
    } catch (e) {
        // return a Error message describing the reason     
        throw Error("Error while Login User")
    }

}