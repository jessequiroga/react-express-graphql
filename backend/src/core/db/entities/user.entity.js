const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userShema = new Schema({
    nickname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

exports.User = mongoose.model('user', userShema)