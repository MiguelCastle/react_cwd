const express = require('express');
const router = express.Router()
const UserController = require('../controllers/user.controller');
const CourseController = require('../controllers/course.controller');
const TrackController = require('../controllers/track.controller');

// user
router.post('/createuser', UserController.registerNewUser)
router.post('/login', UserController.loginUser)
// courses
router.post('/createcourse', CourseController.createCourse)
//tracks 
router.post('/createtrack', TrackController.createTrack)

module.exports = router;
