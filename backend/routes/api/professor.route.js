const { Router } = require('express');
var ProfessorController = require('../../controllers/professors.controller');
var Authorization = require('../../middlewares/authorization');
const upload = require('../../middlewares/multer');
const authorization = require('../../middlewares/authorization');
const router = Router();


// http://localhost:8080/api/perfil/[id] --> GET PERFIL

// Obtener el perfil del profesor --> OK   // http://localhost:8080/api/professor/[id]
router.get('/:id', ProfessorController.getProfessorById)

// Actualizar datos del profesor --> OK   // http://localhost:8080/api/professor/[id]/update
router.put('/:id/update', Authorization,  upload.single('image_profile'), ProfessorController.updateProfessor)

// Eliminar profesor --> OK               // http://localhost:8080/api/professor/[id]/delete
router.delete('/:id/delete', Authorization, ProfessorController.deleteProfessor)

router.post('/:id/contact', ProfessorController.contactProfessor)


// // Obtener clases del profesor --> OK      // http://localhost:8080/api/professor/[id]/misClases
// router.get('/:id/misClases', Authorization, ProfessorController.getCoursesByProfessorId) 
// --> Movido a courses.route.js

module.exports = router;
