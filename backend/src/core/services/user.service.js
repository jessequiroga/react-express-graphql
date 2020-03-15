const { createHash } = require('../../utils/helpers/password-hash.helper');
const { User } = require('../db/entities/user.entity');

class UserService {

    async createUser(payload) {
        const password = createHash(payload.password);
        const user = await new User({...payload, password}).save();

        return user.toObject();
    }

    async findUserByQuery(query) {
        const user = await User.findOne(query);

        if(user) {
            return user.toObject();
        }

        return null;
    }

    async findUsersByQuery(query) {
        const users = await User.find(query);

        if(users) {
            return users;
        }

        return null;
    }

    async findUserById(id) {
        const user = await User.findById(id);

        if(user) {
            return user.toObject();
        }

        return null;
    }

    async findAndUpdateUser(findQuery, updateFields, options = {}) {
        const updatedUser = await User.findOneAndUpdate(findQuery, updateFields, options);

        return updatedUser.toObject();
    }
}

exports.UserService = new UserService();
