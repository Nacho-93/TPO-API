var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

var UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date,
    // Otras propiedades comunes a todos los usuarios
});

var ProfessorSchema = new mongoose.Schema({
    // Propiedades específicas de los profesores
    hours_experience: Number,
    description: String,
    phone: String,
    degree: String,
    // Otras propiedades específicas de los profesores
});

UserSchema.plugin(mongoosePaginate);
ProfessorSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema);
const Professor = mongoose.model('Profesor', ProfessorSchema);

module.exports = { User, Professor };