const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");

let UserSchema = new mongoose.Schema(
    {
    firstName: {
        type: String,
        required: [true, 'Please enter your first name.']
    },
    lastName: {
        type: String,
        required: [true, 'Please enter your last name.']
    },
    email: {
        type: String,
        required: [true, 'Please enter email.'],
        unique: [true, 'Email already exists.']
    },
    passwordHash: {
        type: String,
        required: true
    },
},
{
    timestamps: true
}
);

module.exports = mongoose.model('User', UserSchema);