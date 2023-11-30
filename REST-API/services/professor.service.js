var { User } = require('../db/models/User.model');
var { Course } = require('../db/models/Course.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


exports.getProfessorById = async (id) => {
    // Creating a new Mongoose Object by using the new keyword
    try {

        const professor = await User.findOne({ _id: id});
   
        return professor;

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

var cachedTutors = {};

exports.getAllProfessors = async function () {
    // Creating a new Mongoose Object by using the new keyword
    try {
        if (Object.keys(cachedTutors).length === 0) {
            const tutors = await User.find({}); // Obtener solo los _id de los profesores
            tutors.forEach(tutor => {
                cachedTutors[tutor._id] = tutor; // Asignar cada profesor al objeto usando su _id como clave
            });
        }

        return cachedTutors;

    } catch (e) {
        throw Error("Error al buscar los perfiles")
    }
}