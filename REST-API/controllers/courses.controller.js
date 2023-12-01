var CoursesService = require('../services/courses.service');



// ------------------------------------------PROFILE----------------------------------------------------

exports.getCoursesByProfessorId = async (req, res, next) => {
    const {id} = req.params;

    try {
        const courses = await CoursesService.getCoursesByProfessorId(id)
        res.status(200).json(courses);

    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}

exports.createCourse = async (req, res, next) => {
    const courseData = req.body;
    const {id} = req.params;
    const course = {}
    course.title = req.body.title;
    course.course_description = req.body.course_description;
    course.price_hour = req.body.price_hour;
    course.course_public = req.body.course_public;
    course.info_course = req.body.info_course.split(",");
    course.frequency = req.body.frequency.split(",");
    course.tutor_id = id;


    try {
        const createdCourse = await CoursesService.createCourse(course, id)
        res.status(201).json({createdCourse, message: "Succesfully Created Course"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}

exports.updateCourse = async (req, res, next) => {
    const courseData = req.body;
    const course_id = courseData._id;

    try {
        const updatedCourse = await CoursesService.updateCourse(courseData, course_id)
        res.status(201).json({updatedCourse, message: "Succesfully Updated Course"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}

exports.deleteCourse = async (req, res, next) => {
    const course_id = req.body._id;

    try {
        const deletedCourse = await CoursesService.deleteCourse(course_id)
        res.status(201).json({deletedCourse, message: "Succesfully Deleted Course"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}

// ------------------------------------------MANAGE REQUESTs----------------------------------------------------


exports.getCourses_CACHE = async (req, res, next) => {
    const {id} = req.params;

    try {
        const all_ACs = await CoursesService.getCourses_CACHE(id)
        res.status(200).json(all_ACs);

    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}


exports.manageCourseStatus = async (req, res, next) => {
    const {course_id, _id,  status} = req.body;
    const data_ac = {_id, status}
    const tutor_id = req.params.id;
    try {
        const updatedCourse = await CoursesService.manageCourseStatus(course_id, data_ac, tutor_id)
        res.status(201).json({updatedCourse, message: "Succesfully Updated Course Status"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}


// -----------------------------------REVIEWS--------------------------------------------------


exports.getReviewRequests = async (req, res, next) => {
    const {tutor_id} = req.params;

    try {
        const reviews_not_public = await CoursesService.getReviewRequests(tutor_id)
        res.status(200).json(reviews_not_public);

    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}


exports.acceptReview = async (req, res, next) => {
    const {course_id, review_id, tutor_id} = req.body;
    console.log("REVIEW_ID", review_id, "COURSE_ID", course_id)
    try {
        const updatedCourse = await CoursesService.acceptReview(course_id, review_id, tutor_id)
        res.status(201).json({updatedCourse, message: "El comentario fue aceptado"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}


exports.rejectReview = async (req, res, next) => {
    const {course_id, review_id} = req.body;
    try {
        const updatedCourse = await CoursesService.rejectReview(course_id, review_id)
        res.status(201).json({updatedCourse, message: "El comentario fue rechazado"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}



// ------------------------------------------ALL COURSES UserView----------------------------------------------------


exports.getAllCourses = async (req, res, next) => {
    
        try {
            const allCourses = await CoursesService.getAllCourses()
            res.status(200).json(allCourses);
    
        } catch (e) {
            res.status(400).json({status: 400, message: e.message})
        }
    }


exports.addReview = async (req, res, next) => {
    const { comment, user_name, rating } = req.body;
    const reviewData = { comment, user_name, rating, date: new Date(), public: false }
    const course_id = req.body.course_id


    try {
        const updatedCourse = await CoursesService.addReview(reviewData, course_id)
        res.status(201).json({updatedCourse, message: "Succesfully Added Review"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}