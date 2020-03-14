const { createHash } = require('../../shared/helpers/password-hash.helper');
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

    async findUserById(id) {
        const user = await User.findById(id);

        if(user) {
            return user.toObject();
        }

        return null;
    }
}

exports.UserService = new UserService();
