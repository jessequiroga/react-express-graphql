const { UserService } = require('./user.service');
const { JwtService } = require('./jwt.service');
const HttpStatus = require('http-status-codes');
const { responseText } = require('../../shared/enums/response-text.enum');
const { createHash } = require('../../shared/helpers/password-hash.helper');

class AuthService {

    async signUp({ body }, res) {
        const isEmailExist = await this.checkEmailExist(body.email);

        if(isEmailExist) {
            res.status(HttpStatus.CONFLICT).send(responseText['email-exist']);
            return;
        }

        const createdUser = await UserService.createUser(body);
        const jwt = JwtService.generateJwt({_id: createdUser._id});

        res.send({ jwt });
    }

    async signIn({ body }, res) {
        const { email, password } = body;
        const user = await UserService.findUserByQuery({ email });

        if(!user) {
            res.status(HttpStatus.NOT_FOUND).send(responseText['payload-required']);
            return;
        }

        const isPasswordCorrect = this.checkPasswordCorrect(user.password, password);

        if(!isPasswordCorrect) {
            res.status(HttpStatus.BAD_REQUEST).send(responseText['password-wrong']);
            return;
        }

        const jwt = JwtService.generateJwt({_id: user._id});

        res.send({ jwt });
    }

    checkPasswordCorrect(passHash, password) {
        const inputPassHash = createHash(password);

        return passHash === inputPassHash;
    }

    async checkEmailExist(email) {
        return UserService.findUserByQuery({ email })
    }
}

exports.AuthService = new AuthService();
