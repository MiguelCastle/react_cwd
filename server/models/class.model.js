const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Class = new Schema({
    session_date: {
        type: Date,
        required: [true, "Class must have a date."]
    },
    description: {
        type: String,
        min: 4,
        max: 255
    },
    code_link : {
        type: String,
        max: 120
    },
    video_link: {
        type: String,
        max: 120
    },
    track_id: {
        type: Schema.Types.ObjectId,
        required: [true, "Class must be conencted to a track"]
    }
})