const { Router } = require('express');
var CoursesController = require('../../controllers/courses.controller');
var Authorization = require('../../middlewares/authorization');

const router = Router();


// ------------------------------------------PROFILE----------------------------------------------------


// Obtener clases del profesor --> OK      // http://localhost:8080/api/professor/[id]/misClases
router.get('/:id/misClases', Authorization, CoursesController.getCoursesByProfessorId)

// Crear clase --> OK                      // http://localhost:8080/api/professor/[id]/misClases
router.post('/:id/misClases',Authorization, CoursesController.createCourse)

// Modificar clase --> OK                 // http://localhost:8080/api/professor/[id]/misClases
router.put('/:id/misClases', CoursesController.updateCourse)

// Eliminar clase --> OK                  // http://localhost:8080/api/professor/[id]/misClases
router.delete('/:id/misClases', Authorization, CoursesController.deleteCourse)



// ------------------------------------------MANAGE REQUESTs----------------------------------------------------


// Obtener solicitudes de clases --> OK    // http://localhost:8080/api/professor/[id]/solicitudes-clases
router.get('/:id/solicitudes-clases', Authorization,  CoursesController.getCourses_CACHE)
// SIRVE COMO CACHE PARA REVIEWS Y ACTIVE_CLASSES

// Cambiar estado de clases --> OK        // http://localhost:8080/api/professor/[id]/solicitudes-clases
router.put('/:id/solicitudes-clases', CoursesController.manageCourseStatus)

// Obtener solicitudes de comentarios --> OK // http://localhost:8080/api/professor/[id]/solicitudes-comentarios
router.get('/:id/solicitudes-comentarios', Authorization, CoursesController.getReviewRequests)

// Aceptar comentario --> OK              // http://localhost:8080/api/professor/[id]/solicitudes-comentarios
router.put('/:id/solicitudes-comentarios', CoursesController.acceptReview)

// Rechazar comentario --> OK             // http://localhost:8080/api/professor/[id]/solicitudes-comentarios
router.delete('/:id/solicitudes-comentarios', Authorization, CoursesController.rejectReview)



// ------------------------------------------ALL COURSES UserView----------------------------------------------------


// Obtener todas las clases --> OK        // http://localhost:8080/api/categorias
router.get('/', CoursesController.getAllCourses)

// Agregar comentario --> OK              // http://localhost:8080/api/categorias
router.post('/', CoursesController.addReview)





module.exports = router;