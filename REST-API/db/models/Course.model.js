var mongoose = require('mongoose');
var mongoosePaginate = require('mongoose-paginate');

const ReviewSchema = new mongoose.Schema({
    comment: String,
    user_name: String,
    date: Date,
    public: Boolean,
    rating: Number,
});

const Active_classes = new mongoose.Schema({
    name: String,
    date: Date,
    status: [Boolean],
});

const CourseSchema = new mongoose.Schema({
    title: String,
    course_description: String,
    price_hour: String,
    course_public: Boolean,
    active_classes: [Active_classes],
    frequency: Array,
    reviews: [ReviewSchema],
    info_course: [Boolean],
    professor: { type: mongoose.Schema.Types.ObjectId, ref: 'Professor' },
});


CourseSchema.plugin(mongoosePaginate);

const Course = mongoose.model('Course', CourseSchema, 'Courses');

module.exports = { Course };