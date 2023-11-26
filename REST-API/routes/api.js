/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()


router.use('/users', require('./api/user.route'));
router.use('/perfil', require('./api/professor.route'));
router.use('/perfil', require('./api/courses.route'));
// router.use('perfil/:id/solicitudes-clases', require('./api/courses.route'));
// router.use('perfil/:id/solicitudes-comentarios', require('./api/courses.route'));
module.exports = router;
