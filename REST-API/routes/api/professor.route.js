const { Router } = require('express');
var ProfessorController = require('../../controllers/professors.controller');
var Authorization = require('../../middlewares/authorization');

const router = Router();
// http://localhost:8080/api/perfil/[id] --> GET PERFIL

router.get('/', function(req, res, next) {
    res.send('Llegaste a la ruta de  api/professor.routes');
  }
);
router.get('/:id', ProfessorController.getProfessorById)

// Actualizar datos del profesor --> OK
router.put('/:id/update', Authorization, ProfessorController.updateProfessor)

module.exports = router;
