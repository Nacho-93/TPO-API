var { User } = require('../db/models/User.model');
var { Course } = require('../db/models/Course.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');


exports.getProfessorById = async (id) => {
    // Creating a new Mongoose Object by using the new keyword
    try {

        const professor = await User.findOne({ _id: id});
        console.log("\nprofessor SERVICE\n",professor)
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

            if (validKeys.includes(key) && userData[key] && key !== "_id") { 
                oldProfessor[key] = key !== 'password' ? userData[key] : bcrypt.hashSync(userData[key], 10);
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


