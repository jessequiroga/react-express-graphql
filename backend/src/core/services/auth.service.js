const { UserService } = require('./user.service');

class AuthService {

    async signUp(req) {
        const createdUser = await UserService.createUser(req.body);

        console.log(createdUser)
    }
}

exports.AuthService = new AuthService();