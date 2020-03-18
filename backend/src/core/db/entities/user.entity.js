const mongoose = require('mongoose');
const { Schema } = mongoose;
const { UserTypeEnum } = require('../enums/user-type.enum');

const userSchema = new Schema({
    nickname: {
        type: Schema.Types.String,
        required: true,
    },
    password: {
        type: Schema.Types.String,
        required: true,
    },
    email: {
        type: Schema.Types.String,
        required: true,
    },
    type: {
        type: Schema.Types.String,
        required: true,
        enum: UserTypeEnum,
        default: 'UserRegistration'
    },
    createdAt: {
        type: Schema.Types.Number,
        required: true,
        default: new Date().getTime(),
    }
});

exports.User = mongoose.model('User', userSchema);
