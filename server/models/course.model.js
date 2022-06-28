const mongoose = require("mongoose");

const CourseSchema = new mongoose.Schema({
    name: {
        type: String,
        min: 4,
        max: 55,
        required: [true, "Name must not be null"]
    },
    description: {
        type: String,
        min: 4,
        max:255,
        required: false
    },
    languages: {
        type: [{
            type: String,
            min: 3,
            max: 20,
            required: [true, "Language name must not be null"]
        }],
        validate: [arrayLimit, '{PATH} must in between 1 and 6']
    }
})

function arrayLimit(val) {
    return val.length > 0 && val.length <= 6;
}

const Course = mongoose.model("Course", CourseSchema);

module.exports = Course;