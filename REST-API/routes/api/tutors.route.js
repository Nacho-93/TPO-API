const { Router } = require('express');
var ProfessorController = require('../../controllers/professors.controller');

const router = Router();


// Obtener todos los profesores --> OK      // http://localhost:8080/api/tutors
router.get('/', ProfessorController.getAllProfessors)

module.exports = router;