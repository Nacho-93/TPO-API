const nodemailer = require('nodemailer');


exports.contactMailService = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Puerto del servidor SMTP
    auth: {
        user: process.env.USER_CONTACT_MAIL,
        pass: process.env.USER_CONTACT_KEY
    }
});