const nodemailer = require('nodemailer');


exports.MailerService = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // Puerto del servidor SMTP
    auth: {
        user: process.env.USER_MAIL,
        pass: process.env.USER_PASS
    }
});