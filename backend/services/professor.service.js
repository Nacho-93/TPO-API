var { User } = require('../db/models/User.model');
var { Course } = require('../db/models/Course.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const { contactMailService } = require('./contactMailer.js');


exports.getProfessorById = async (id) => {
    // Creating a new Mongoose Object by using the new keyword
    try {
        
        let tutors_dict = {}
        const professors = await User.find({});
        professors.forEach(p => {
            tutors_dict[p._id] = p;
        });

        return tutors_dict[id];

    } catch (e) {
        // return a Error message describing the reason 
        console.log(e)
        throw Error("Error al buscar el perfil")
    }
}


exports.updateProfessor = async (userId, userData) => {
    try {
        const oldProfessor = await User.findOne({ _id: userId });
        
        const validKeys = Object.keys(User.schema.paths);
        
        Object.keys(userData).forEach(key => {
            if ((validKeys.includes(key) || key === "oldPassword") && userData[key] && key !== "_id") { 
    
                if (key === "oldPassword" && bcrypt.compareSync(userData[key], oldProfessor.password) && userData["password"]) {
                    oldProfessor['password'] = bcrypt.hashSync(userData['password'], 10);
                } else if (key !== "oldPassword" && key !== "password") {
                    oldProfessor[key] = userData[key]
                }
            }
        });
        const savedProfessor = await oldProfessor.save();
        return savedProfessor;
    
    } catch (e) {
        throw Error("Error al actualizar el perfil")
    }
}


exports.deleteProfessor = async function (id) {

    try {
        const deleted = await User.deleteOne({
            _id: id
        })

        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("No se ha podido eliminar el perfil")
        }
        return deleted;
    } catch (e) {
        throw Error(`Error al eliminar el perfil`)
    }
}



exports.getAllProfessors = async function () {
    // Creating a new Mongoose Object by using the new keyword
    try {
        
        let tutors_dict = {}
        const professors = await User.find({});
        professors.forEach(p => {
            tutors_dict[p._id] = p;
        });

        return tutors_dict;

    } catch (e) {
        throw Error("Error al buscar los perfiles")
    }
}


exports.contactProfessor = async function (id, name, email, message, course_id) {
    // Creating a new Mongoose Object by using the new keyword
    id = mongoose.Types.ObjectId(id);
    course_id = mongoose.Types.ObjectId(course_id);

    try {

        const course = await Course.findOne({ _id: course_id });
        const tutor = await User.findOne({ _id: id });
        course.active_classes.push({ name, date:new Date(), _id: new ObjectId(), status: [true, false, false, false] });
        
        const updatedCourse = await course.save();
        
       // Configuración del transporte (SMTP)
    
    // Opciones del correo
    const mailOptions = {
        from: email,
        to: "professorcontact4@gmail.com", // Dirección de correo del profesor
        subject: 'Solicitud de clase',
        html: `<p>${message}</p>` // Cuerpo del mensaje
    };

    // Enviar el correo
    console.log("Enviando correo...");

    const msg = await contactMailService.sendMail(mailOptions);

    console.log("Correo enviado con éxito");

    return;
} catch (e) {
    throw Error(e.message);
}
}
