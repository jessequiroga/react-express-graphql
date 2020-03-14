const jwt = require('jsonwebtoken');
const env = require('../configs/env.config');


class JwtService {
    /**
     * generate jwt of payload
     * @return jwt
     * @param payload
     */
    generateJwt(payload) {
        return jwt.sign(payload, env.secretKeys.jwt);
    }
}

exports.JwtService = new JwtService();
