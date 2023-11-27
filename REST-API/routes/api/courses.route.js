const { Router } = require('express');
var CoursesController = require('../../controllers/courses.controller');
var Authorization = require('../../middlewares/authorization');

const router = Router();

// Obtener clases del profesor --> OK      // http://localhost:8080/api/professor/[id]/misClases
router.get('/:id/misClases', Authorization, CoursesController.getCoursesByProfessorId)


// Crear clase --> OK                      // http://localhost:8080/api/professor/[id]/misClases
router.post('/:id/misClases', Authorization, CoursesController.createCourse)

// Modificar clase --> OK                 // http://localhost:8080/api/professor/[id]/misClases
router.put('/:id/misClases', Authorization, CoursesController.updateCourse)

// Eliminar clase --> OK                  // http://localhost:8080/api/professor/[id]/misClases
router.delete('/:id/misClases', Authorization, CoursesController.deleteCourse)


// Cambiar estado de clases --> OK        // http://localhost:8080/api/professor/[id]/solicitudes-clases
router.put('/:id/solicitudes-clases', CoursesController.manageCourseStatus)


module.exports = router;