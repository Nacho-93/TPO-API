var { User } = require('../db/models/User.model');
var { Course } = require('../db/models/Course.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');

let cachedCourses_MyClasses = {};
let cachedCourses_ManageRequests = {};

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


// ------------------------------------------MANAGE REQUESTs----------------------------------------------------

exports.getCourses_CACHE = async (tutor_id) => {

    try {
        tutor_id = mongoose.Types.ObjectId(tutor_id);
        if (Object.keys(cachedCourses_ManageRequests).length === 0) {
            const courses = await Course.find({ tutor_id: tutor_id });
            courses.forEach(course => {
                cachedCourses_ManageRequests[course._id] = course;
            });
        }

        const all_ACs= Object.values(cachedCourses_ManageRequests).flatMap(course => {
            if (course.active_classes.length > 0) {
                return course.active_classes;
            }
        });
        
        
        return all_ACs;
        
    } catch (e) {
        throw Error("Error al buscar los cursos del profesor")
    }
}



exports.manageCourseStatus = async (course_id, data_ac, tutor_id) => {

    tutor_id = mongoose.Types.ObjectId(tutor_id);
    course_id = mongoose.Types.ObjectId(course_id);
    data_ac._id = mongoose.Types.ObjectId(data_ac._id);
 
    try {

        if (Object.keys(cachedCourses_ManageRequests).length === 0) {
            throw Error("No hay cursos para actualizar")
        }
        

        const oldCourse = cachedCourses_ManageRequests[course_id]

        const updatedACs = oldCourse.active_classes.map(ac => {
            if (ac._id.equals(data_ac._id)) {
                ac.status = data_ac.status;
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


// -----------------------------------REVIEWS--------------------------------------------------

var cached_reviewsNotPublic = {};

exports.getReviewRequests = async (tutor_id) => {

    try {
        if (Object.keys(cachedCourses_ManageRequests).length === 0) {
            throw Error("No hay cursos")
        }

        if (Object.keys(cached_reviewsNotPublic).length === 0) {
            cached_reviewsNotPublic = Object.values(cachedCourses_ManageRequests)
                .flatMap(course => {
                    return course.reviews.filter(review => !review.public);
                })
                .reduce((accumulator, review) => {
                    accumulator[review.id] = review;
                    return accumulator;
                }, {});
        }
 
        
        return cached_reviewsNotPublic;

    } catch (e) {
        throw Error(e.message)
    }
}



exports.acceptReview = async (course_id, review_id) => {

    course_id = mongoose.Types.ObjectId(course_id);
    review_id = mongoose.Types.ObjectId(review_id);
    
    try {
        if (Object.keys(cachedCourses_ManageRequests) === 0) {
            throw Error("No hay reviews")
        }

        const course = cachedCourses_ManageRequests[course_id]
        
        const updatedReviews = course.reviews.map(review => {
            if (review._id.equals(review_id)) {
                review.public = true;
            }
            return review;
        });

        course.reviews = updatedReviews;
        const savedCourse = await course.save();
        return savedCourse;

    } catch (e) {
        throw Error(e.message)
    }
}



exports.rejectReview = async (course_id, review_id) => {

    course_id = mongoose.Types.ObjectId(course_id);
    review_id = mongoose.Types.ObjectId(review_id);
    
    try {
        if (Object.keys(cachedCourses_ManageRequests) === 0) {
            throw Error("No hay reviews")
        }

        const course = cachedCourses_ManageRequests[course_id]
        
        const updatedReviews = course.reviews.filter(review => !review._id.equals(review_id));

        course.reviews = updatedReviews;
        const savedCourse = await course.save();
        return savedCourse;

    } catch (e) {
        throw Error(e.message)
    }
}



// -----------------------------------ALL COURSES UserView--------------------------------------------------

var cachedCourses_Categories = {};

exports.getAllCourses = async () => {
    try {
        if (Object.keys(cachedCourses_Categories).length === 0) {
            const courses = await Course.find({ course_public: true });
            courses.forEach(course => {
                cachedCourses_Categories[course._id] = course;
            });
        }
        
        return cachedCourses_Categories;

    } catch (e) {
        throw Error("Error al buscar las clases")
    }
}


exports.addReview = async (reviewData, course_id) => {

    course_id = mongoose.Types.ObjectId(course_id);

    try {

        if (Object.keys(cachedCourses_Categories).length === 0) {
            throw Error("No hay clases disponibles")
        }

        const course = cachedCourses_Categories[course_id]
        
        console.log(course)

        reviewData._id = new mongoose.Types.ObjectId();
        course.reviews.push(reviewData);
        const savedCourse = await course.save();
        return savedCourse;

    } catch (e) {
        throw Error("Error al añadir el comentario")
    }
}