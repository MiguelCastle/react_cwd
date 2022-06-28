const mongoose = require("mongoose");

const CodeSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, "Must have a code."],
        unique: true
    },
    expiration_date:  {
        type: Date,
        required: [true, "Expiration date is required."]
    },
    allowed_emails: {
        type: [String]
    }
})

const Code = mongoose.model("Code", CodeSchema);
module.exports = Code;
