/**ROUTE USER APIs. */
var express = require('express')

var router = express.Router()


router.use('/users', require('./api/user.route'));
router.use('/perfil', require('./api/professor.route'));
module.exports = router;
