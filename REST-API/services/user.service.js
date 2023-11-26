// Gettign the Newly created Mongoose Model we just created 
var {User} = require('../db/models/User.model');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


// Async function to get the User List
exports.getUsers = async function (query, page, limit) {

    // Options setup for the mongoose paginate
    var options = {
        page,
        limit
    }
    // Try Catch the awaited promise to handle the error 
    try {
        console.log("Query",query)
        var Users = await User.paginate(query, options)
        // Return the Userd list that was retured by the mongoose promise
        return Users;

    } catch (e) {
        // return a Error message describing the reason 
        console.log("error services",e)
        throw Error('Error while Paginating Users');
    }
}

exports.createUser = async function (user) {
    // Creating a new Mongoose Object by using the new keyword
    var hashedPassword = bcrypt.hashSync(user.password, 8);
    
    var newUser = new User({
        name: user.name,
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
        console.log("login:",user)
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



// exports.updateUser = async function (userId, userData) {

//     try {
//         //Find the old User Object by the Id
//         var oldUser = await User.findOne({_id: userId});

//     } catch (e) {
//         throw Error("Error occured while Finding the User")
//     }
//     // If no old User Object exists return false
//     if (!oldUser) {
//         return false;
//     }
//     //Edit the User Object

//     if (userData.name) {
//         oldUser.name = userData.name}
//     if (userData.email) {
//         oldUser.email = userData.email}
//     if (userData.password) {
//         oldUser.password =  bcrypt.hashSync(userData.password, 10);}
    

//     try {
//         var savedUser = await oldUser.save()
//         return savedUser;
//     } catch (e) {
//         throw Error("And Error occured while updating the User");
//     }
// }

// exports.deleteUser = async function (id) {
//     console.log("Delete ID" + id)
//     // Delete the User
//     try {
//         const deleted = await User.deleteOne({
//             _id: id
//         })
//         console.log(deleted)
//         if (deleted.n === 0 && deleted.ok === 1) {
//             throw Error("User Could not be deleted")
//         }
//         return deleted;
//     } catch (e) {
//         throw Error(`Error Occured while Deleting the User`)
//     }
// }


