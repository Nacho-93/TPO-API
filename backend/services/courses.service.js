var { User } = require('../db/models/User.model');
var { Course } = require('../db/models/Course.model');
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');



// exports.getCoursesByProfessorId = async (id) => {
//     try {
//         id = mongoose.Types.ObjectId(id);

//         if (Object.keys(cachedCourses_MyClasses).length > 0) {
//             return cachedCourses_MyClasses;
//         }

//         const courses = await Course.find({ tutor_id: id });
        
//         courses.forEach(course => {
//             cachedCourses_MyClasses[course._id] = course;
//         });

//         return courses;

//     } catch (e) {
//         throw Error("Error al buscar los cursos del profesor")
//     }
// }


exports.createCourse = async (courseData, id) => {

    try {
        
        courseData.active_classes = [];
        courseData.reviews = [];
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
        
    
        const oldCourse = await Course.findOne({ _id: course_id });
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



exports.manageCourseStatus = async (course_id, data_ac, tutor_id) => {
    
    course_id = mongoose.Types.ObjectId(course_id);
    data_ac.ac_id = mongoose.Types.ObjectId(data_ac.ac_id);
    


    try {
        data_ac.status = data_ac.status.split(",")
        
        const oldCourse = await Course.findOne({ _id: course_id });
        const updatedACs = oldCourse.active_classes.map(ac => {
      
            if (ac._id.equals(data_ac.ac_id)) {
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



exports.acceptReview = async (course_id, review_id, tutor_id) => {

    course_id = mongoose.Types.ObjectId(course_id);
    review_id = mongoose.Types.ObjectId(review_id);

    
    try {

        const course = await Course.findOne({ _id: course_id });

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



exports.rejectReview = async (course_id, review_id, tutor_id) => {

    course_id = mongoose.Types.ObjectId(course_id);
    review_id = mongoose.Types.ObjectId(review_id);
    
    try {
        
        const course = await Course.findOne({ _id: course_id });
        
        const updatedReviews = course.reviews.filter(review => !review._id.equals(review_id));

        course.reviews = updatedReviews;
        const savedCourse = await course.save();
        return savedCourse;

    } catch (e) {
        throw Error(e.message)
    }
}



// -----------------------------------ALL COURSES UserView--------------------------------------------------


exports.getAllCourses = async () => {
    try {

        let allCourses = {}
        const courses = await Course.find({});
        courses.forEach(course => {
            allCourses[course._id] = course;
        });
       
        return allCourses;

    } catch (e) {
        throw Error("Error al buscar las clases")
    }
}


exports.addReview = async (reviewData, course_id) => {

    course_id = mongoose.Types.ObjectId(course_id);
   
    try {
   
        const course = await Course.findOne({ _id: course_id });
        
        reviewData._id = new mongoose.Types.ObjectId();
        course.reviews.push(reviewData);

        const savedCourse = await course.save();

        return savedCourse;

    } catch (e) {
        throw Error(e.message)
    }
}