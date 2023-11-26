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

    try {
        const createdCourse = await CoursesService.createCourse(courseData)
        res.status(201).json(createdCourse);
    } catch (e) {
        res.status(400).json({status: 400, message: e.message})
    }
}