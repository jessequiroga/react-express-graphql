const mongoose = require('mongoose');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: '',
    },
    images: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Number,
        required: true,
        default: new Date().getTime(),
    },
    userId: {
        type: String,
        required: true,
    }
});

exports.Post = mongoose.model('post', postSchema);