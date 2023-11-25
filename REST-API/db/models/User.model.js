var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date,

    // Otras propiedades comunes a todos los usuarios
});

const ProfessorSchema = new mongoose.Schema({
    hours_experience: Number,
    description: String,
    phone: String,
    degree: String,
});


UserSchema.plugin(mongoosePaginate);
ProfessorSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema, 'Professor');
const Professor = mongoose.model('Professor', ProfessorSchema, 'Professor');


module.exports = { User, Professor };