const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const uniqueValidator = require('mongoose-unique-validator');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."]
    },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
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
        required: false,
        minlength: [10, "Phone must be greater than 10 digits."],
        maxlength: [16, "Phone cannot be greater than 16."]
    },
    password: {
        type: String,
        required: [true, "Password is required."],
        minlength: [8, "Password must be greater than 8."]
    },
    profession: {
        type: String,
        required: false
    },
    location: {
        city: String,
        country: String
    },
    is_instructor: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});

UserSchema.pre('save', function(next) {
    bcrypt.hash(this.password, 10)
      .then(hash => {
        this.password = hash;
        next();
    });
});

const User = mongoose.model("User", UserSchema);
UserSchema.plugin(uniqueValidator, {message: "*Error, {VALUE} must be unique"});

module.exports = User;
