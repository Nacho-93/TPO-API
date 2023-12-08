var express = require('express');
const morgan = require('morgan');
var router = express.Router();



/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Express esta escuchando');
});

module.exports = router;
