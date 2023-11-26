var { User } = require('../db/models/User.model');
var { Course } = require('../db/models/Course.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

let cachedCourses = {};

exports.getCoursesByProfessorId = async (id) => {
    try {
        id = mongoose.Types.ObjectId(id);

        if (cachedCourses[id]) {
            return cachedCourses[id];
        }

        const courses = await Course.find({ tutor_id: id });
        
        cachedCourses[id] = courses;

        return courses;

    } catch (e) {
        throw Error("Error al buscar los cursos del profesor")
    }
}


exports.createCourse = async (courseData) => {
    try {

        // VERIFICAR QUE TENGA TODOS LOS CAMPOS NECESARIOS

        const newCourse = new Course(courseData);
        const savedCourse = await newCourse.save();
        return savedCourse;
    } catch (e) {
        throw Error("Error al crear el curso")
    }
}