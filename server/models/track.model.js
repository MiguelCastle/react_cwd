const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TrackSchema = new Schema({
    name: {
        type: String,
        required: [true, "A track name is required."]
    },
    course: {
        type: Schema.Types.ObjectId,
        required: [true, 'Track must have a course.']
    },
    start_date: {
        type: Date,
        required: [true, "Track must have a starting date."]
    },
    end_date: {
        type: Date,
        required: [true, "Track must have an end date."]
    },
    code: {
        type: Schema.Types.ObjectId,
        required: [true, "Track must have a code id."]
    },
    meeting_days: {
        type: [Number],
        required: [true, "Track must have meeting days."]
    }
})

const Track = mongoose.model("Track", TrackSchema);
module.exports = Track;