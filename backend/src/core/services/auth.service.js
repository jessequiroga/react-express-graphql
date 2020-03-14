const { UserService } = require('./user.service');
const { JwtService } = require('./jwt.service');

class AuthService {

    async signUp(req, res) {
        const createdUser = await UserService.createUser(req.body);
        const jwt = JwtService.generateJwt({_id: createdUser._id});

        res.send({jwt});
    }
}

exports.AuthService = new AuthService();
