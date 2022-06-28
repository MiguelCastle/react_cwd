const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required for contact."]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        validate: {
            validator: function(v) {
                return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
            },
            message: "Please enter a valid email"
        },
        required: [true, "Email required"]
    },
    phone: {
        type: String,
        required: true,
        match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        minlength: 4,
        maxlength: 500
    }
});

const Contact = mongoose.model("Contact", ContactSchema);

module.exports = Contact;