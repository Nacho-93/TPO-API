/**
 * @type {Module jsonwebtoken|Module jsonwebtoken}
 * @author | Mohammad Raheem
 */
var jwt = require('jsonwebtoken');
var config = require('../config').config();

const authorization = (req, res, next) => {

    var token = req.headers['x-access-token'];
    console.log("token",token + "\n");
    var msg = {auth: false, message: 'No token provided.'};
    if (!token)
        res.status(500).send(msg);

    let sec = process.env.SECRET;
    //console.log("secret",sec)
    jwt.verify(token, sec, function (err, decoded) {
        var msg = {auth: false, message: 'Failed to authenticate token.'};
        if (err) {
            res.status(500).send(msg);
        }

        req.userId = decoded.id;
        if (req.params.id && req.params.id !== req.userId) {
            res.status(500).send({auth: false, message: 'Failed to authenticate token.'});
        }
        next();
    });
}

module.exports = authorization;

