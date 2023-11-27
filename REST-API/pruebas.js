const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const {User} = require('./db/models/User.model');
const {Course} = require('./db/models/Course.model'); 

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
