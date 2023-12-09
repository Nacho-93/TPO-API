const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// POR QUE TENGO QUE IMPORTAR EL DOTENV ACA Y NO EN CONTACTMAILER.JS PARA QUE FUNCIONE? solo dios sabe...

exports.recoveryMailService = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465, // Puerto del servidor SMTP
    auth: {
        user: process.env.USER_RECOVERY_MAIL,
        pass: process.env.USER_RECOVERY_KEY
    }
});