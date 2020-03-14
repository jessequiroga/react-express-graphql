const { ExtractJwt } = require("passport-jwt");
const env = require('../configs/env.config');

exports.jwtConfig = {
    // define a secret key for signing the jwt tokens
    secretOrKey: env.secretKeys.jwt,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};
