const Track = require('../models/track.model');
const Course = require('../models/course.model');
const Code = require('../models/code.model');
var crypto = require("crypto");

module.exports.createTrack = async (req, res) => {
    console.log(req.body)
    // first check if course exist
    Course.findById(req.body['course'])
    .then((course) => {
        console.log('course found')
        console.log(course._id);
        const code = crypto.randomBytes(4).toString('hex');
        console.log(code);
        const code_data = {
            code: code,
            expiration_date: req.body['end_date'],
            allowed_emails: req.body['allowed_emails']
        }
        // creating code for the track 
        new_code = new Code(code_data)
        new_code.save()
        .then((code) => {
            console.log('code created')
            console.log(code._id)
            track_data = {
                'name': req.body['name'],
                'course': course._id,
                'start_date': req.body['start_date'],
                'end_date': req.body['end_date'],
                'code': new_code._id,
                'meeting_days': req.body['meeting_days']
            }
            console.log('creating track')
            const track = new Track(track_data);
            track.save()
            .then((t) => {
                console.log('track has been made')
                console.log(t);
                res.status(201).json({'new_track' : t})
            } )
            .catch(err => res.status(400).json(err));
        })
        .catch(err => res.status(400).json({'error': err}));

    })
    .catch(err => res.status(400).json({'error': 'Failed to find Course.'}));

    // const track = new Track(req.body);
    // track.save()
    // .then((t) => {
    //     console.log(t);
    //     res.status(201).json({'new_track' : t})
    // } )
    // .catch(err => res.status(400).json(err));
    //res.status(201).json({'msg':' fuck u'})
}