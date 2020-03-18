const mongoose = require('mongoose');
const { relation } = require('../../../utils/helpers/relation.helper');
const { Schema } = mongoose;

const postSchema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
    },
    description: {
        type: Schema.Types.String,
        default: '',
    },
    images: {
        type: [Schema.Types.String],
        default: [],
    },
    createdAt: {
        type: Schema.Types.Date,
        required: true,
        default: new Date().getTime(),
    },
    userId: relation('User', { index: true })
});

exports.Post = mongoose.model('Post', postSchema);
