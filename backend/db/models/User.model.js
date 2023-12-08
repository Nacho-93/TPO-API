var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    date: Date,
    lastName: String,
    hours_experience: Number,
    description: String,
    phone: String,
    degree: String,
    image_profile: String,

    // Otras propiedades comunes a todos los usuarios
});

UserSchema.plugin(mongoosePaginate);

const User = mongoose.model('User', UserSchema, 'Professor');

module.exports = { User };