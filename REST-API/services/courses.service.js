var { User } = require('../db/models/User.model');
var { Course } = require('../db/models/Course.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

let cachedCourses_MyClasses = {};
let cachedCourses_Requests = {};

exports.getCoursesByProfessorId = async (id) => {
    try {
        id = mongoose.Types.ObjectId(id);

        if (Object.keys(cachedCourses_MyClasses).length > 0) {
            return cachedCourses_MyClasses;
        }

        const courses = await Course.find({ tutor_id: id });
        
        courses.forEach(course => {
            cachedCourses_MyClasses[course._id] = course;
        });

        return courses;

    } catch (e) {
        throw Error("Error al buscar los cursos del profesor")
    }
}


exports.createCourse = async (courseData, id) => {
    try {
        
        
        
        courseData.frequency = [1, "semana", 6];
        courseData.info_course = [true,false, true, false];
        console.log(courseData.tutor_id)
        const requiredKeys = ['title', 'course_description', 'price_hour', 'course_public', 'info_course', 'frequency'];

        Object.keys(courseData).forEach(key => {
            if (!requiredKeys.includes(key) || !courseData[key]) {
                throw Error("Error al crear el curso")
            }
        });
    
        courseData.tutor_id = mongoose.Types.ObjectId(id);

        const newCourse = new Course(courseData);
        const savedCourse = await newCourse.save();
        return savedCourse;
    } catch (e) {
        throw Error(e.message)
    }
}


exports.updateCourse = async (courseData, course_id) => {
    try {

        if (Object.keys(cachedCourses_MyClasses).length === 0) {
            throw Error("No hay cursos para actualizar")
        }
        

        const oldCourse = cachedCourses_MyClasses[course_id]
        const validKeys = Object.keys(Course.schema.paths);

        Object.keys(courseData).forEach(key => {
            if (validKeys.includes(key) && courseData[key] && key !== "_id") {
                oldCourse[key] = courseData[key];
            }
        });

        const savedCourse = await oldCourse.save();
        return savedCourse;
    } catch (e) {
        throw Error(e.message)
    }
}


exports.deleteCourse = async function (course_id) {
    try {

        if (Object.keys(cachedCourses_MyClasses).length === 0) {
            throw Error("No hay cursos para eliminar")
        }

        const deleted = await Course.deleteOne({
            _id: course_id
        })
        if (deleted.n === 0 && deleted.ok === 1) {
            throw Error("No se ha podido eliminar el curso")
        }
        return deleted;
    } catch (e) {
        throw Error(`Error al eliminar el curso`)
    }
}


exports.manageCourseStatus = async (course_id, active_class, tutor_id) => {

    tutor_id = mongoose.Types.ObjectId(tutor_id);
    course_id = mongoose.Types.ObjectId(course_id);

 
    try {
        if (Object.keys(cachedCourses_Requests).length === 0) {
            const courses = await Course.find({ tutor_id: tutor_id });
            courses.forEach(course => {
                cachedCourses_Requests[course._id] = course;
            });
        }
    
        const oldCourse = cachedCourses_Requests[course_id]


        const updatedACs = oldCourse.active_classes.map(ac => {
            console.log("SIIIIIIII")
            if (ac.id === active_class.id) {
                console.log("HELLOOO")
                ac.status = active_class.status;
            }
            return ac;
        });
        
        oldCourse.active_classes = updatedACs;

        const savedCourse = await oldCourse.save();
        return savedCourse;

    } catch (e) {
        throw Error(e.message)
    }
}
