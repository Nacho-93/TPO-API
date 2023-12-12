const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {User} = require('./models/User.model');
const {Course} = require('./models/Course.model'); 
const { ObjectId } = require('mongodb');

const updateProfessorsWithPassword = async () => {
    // const profesores = await User.find({});
    // for (const professor of profesores) {
    //     const hashedPassword = await bcrypt.hash('123456', 10); // Contraseña por defecto o vacía
    //     professor.password = hashedPassword;
    //     await professor.save();
    //   }
    // const profesores = await User.find({});
    // for (const professor of profesores) {
    //     professor.date = new Date();
    //     await professor.save();
    //   }

    // Change id from each active_class of each course

    // const courses = await Course.find({});
    // courses.forEach(c => {
    //     c.active_classes.forEach(ac => {
    //         ac._id = new mongoose.Types.ObjectId();
    //     });
    //     c.save();
    // })
    // Change password from 6557e53fe79bf4e3ff72a4d4 to 123456
    // const profesores = await User.find({});
  
    // for (const professor of profesores) {
    //     const id = professor._id.toString();
    //     if (id === '6557e53fe79bf4e3ff72a4d4') {
    //         const hashedPassword = await bcrypt.hash('123456', 10); // Contraseña por defecto o vacía
    //         professor.password = hashedPassword;
    //         console.log(professor)
    //         await professor.save();
    //     }
    // }
    
    //$2a$10$JS9ZtGhTUNq1bbdH421Em.MHa5TKAqE6xIX8lYapCTVc8PvhQUIIy

    process.exit(0);
};


// Conexión a la base de datos
mongoose.connect('mongodb+srv://apiuser:apikey@cluster-api.sndlbbd.mongodb.net/AzertyDB'
, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


// Ejecución de la función para actualizar los profesores
updateProfessorsWithPassword();
