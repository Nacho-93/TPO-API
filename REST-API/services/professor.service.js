var { User } = require('../db/models/User.model');
var { Course } = require('../db/models/Course.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { ObjectId } = require('mongodb');
const nodemailer = require('nodemailer');


var cachedTutors = {};

const getCACHE_tutors = async () => {

    if (Object.keys(cachedTutors).length === 0) {
        const courses = await User.find({ });
        courses.forEach(p => {
            cachedTutors[p._id] = p;
        });
    }
    return cachedTutors;
}

exports.getProfessorById = async (id) => {
    // Creating a new Mongoose Object by using the new keyword
    try {

        const professors = await getCACHE_tutors();
   
        return professors[id];

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
    console.log("Delete ID" + id)

    try {
        const deleted = await User.deleteOne({
            _id: id
        })
        console.log(deleted)
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
        if (!cachedTutors) {
            cachedTutors = await getCACHE_tutors();
        }
        return cachedTutors;

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
        course.active_classes.push({ name, date:new Date(), _id: new ObjectId(), status: [true, false, false, false] });
        
        const updatedCourse = await course.save();

       // Configuración del transporte (SMTP)
       const transporter = nodemailer.createTransport({
        host: 'tu_servidor_smtp',
        port: 587, // Puerto del servidor SMTP
        secure: false, // true para SSL
        auth: {
            user: 'tu_usuario',
            pass: 'tu_contraseña'
        }
    });

    // Opciones del correo
    const mailOptions = {
        from: 'tu_email@dominio.com',
        to: 'email_del_profesor@ejemplo.com', // Dirección de correo del profesor
        subject: 'Asunto del correo',
        text: `Hola Profesor, ${message}` // Cuerpo del mensaje
    };

    // Enviar el correo
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Correo enviado: ' + info.response);
        }
    });

    console.log("Correo enviado con éxito");

    return;
} catch (e) {
    throw Error("Error al buscar el perfil");
}
}

// exports.getCoursesByProfessorId = async function (id) {
//     // Creating a new Mongoose Object by using the new keyword
//     try {
//         const courses = await Course.find({ professor: id });
//         return courses;

//     } catch (e) {
//         throw Error("Error al buscar los cursos")
//     }
// }