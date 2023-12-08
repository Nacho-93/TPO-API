var express = require('express')
var router = express.Router()
var UserController = require('../../controllers/users.controller');
var Authorization = require('../../middlewares/authorization');


// Registrar user --> OK    // http://localhost:8080/api/user/registration
router.post('/registration', UserController.createUser)

// Login user --> OK       // http://localhost:8080/api/user/login
router.post('/login', UserController.loginUser)

// Get user by id --> OK    // http://localhost:8080/api/user/[id]
router.get('/users',Authorization, UserController.getUsers) 

// Get user by mail --> OK    // http://localhost:8080/api/user/[id]
router.post('/userByMail', Authorization, UserController.getUsersByMail) // Funciona


// router.put('/update', Authorization, UserController.updateUser) // Esta en professor
// router.delete('/delete', Authorization, UserController.removeUser) // Esta en professor

// Export the Router
module.exports = router;


