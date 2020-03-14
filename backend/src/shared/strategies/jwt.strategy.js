const { Strategy } = require('passport-jwt');
const { jwtConfig } = require('../../core/configs/jwt.config');
const { UserService } = require('../../core/services/user.service');

exports.jwtStrategy = new Strategy(jwtConfig, async function(jwt_payload, done) {
    let user = await UserService.findUserById(jwt_payload._id);

    if (user) {
        return done(null, user);
    }

    return done(err, false);
});
