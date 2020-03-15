const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    },
    createdAt: {
        type: Number,
        required: true,
        default: new Date().getTime(),
    }
});

exports.User = mongoose.model('user', userSchema);
