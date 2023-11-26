const { Router } = require('express');
var CoursesController = require('../../controllers/courses.controller');
var Authorization = require('../../middlewares/authorization');

const router = Router();

// Obtener clases del profesor --> OK      // http://localhost:8080/api/professor/[id]/misClases
router.get('/:id/misClases',Authorization, CoursesController.getCoursesByProfessorId)


// Crear clase --> ON TEST                      // http://localhost:8080/api/professor/[id]/crearClase
router.post('/:id/misClases', CoursesController.createCourse)
// Falta AUTH

module.exports = router;