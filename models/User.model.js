const mongoose = require('mongoose')

let UserSchema = new mongoose.Schema(
    {
    username: {
        type: String,
        required: [true, 'Please enter username.']
    },
    email: {
        type: String,
        required: [true, 'Please enter email.']
    },
    passwordHash: {
        type: String,
        required: true
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model('User', UserSchema);