const mongoose = require('mongoose');
const { Schema, model } = require("mongoose");

let UserSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: [true, 'Please enter your username.']
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