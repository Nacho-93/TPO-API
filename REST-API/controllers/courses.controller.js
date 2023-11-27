var CoursesService = require('../services/courses.service');


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

    try {
        const createdCourse = await CoursesService.createCourse(courseData, id)
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


exports.manageCourseStatus = async (req, res, next) => {
    const {course_id, id,  status} = req.body;
    const active_class = {id, status}
    const tutor_id = req.params.id;
    try {
        const updatedCourse = await CoursesService.manageCourseStatus(course_id, active_class, tutor_id)
        res.status(201).json({updatedCourse, message: "Succesfully Updated Course Status"});
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}