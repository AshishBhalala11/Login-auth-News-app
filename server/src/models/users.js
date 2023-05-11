const { Schema, model } = require('mongoose');

// User schema for adding user to database which includes email and password
const userSchema = new Schema({
    email: {
        type: String
    },
    password: {
        type: String
    },
}, {timestamps: true})

const User = model('User', userSchema);
module.exports = User;
