const Course = require('../models/course.model');

module.exports.createCourse = (req, res) => {
    const course = new Course(req.body);
    course.save()
    .then((c) => {
        console.log(c)
        res.status(201).json({'new_course': c})
    })
    .catch(err => res.status(400).json(err));
};

