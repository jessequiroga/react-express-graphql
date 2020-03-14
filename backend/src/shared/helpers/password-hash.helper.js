const crypto = require('crypto');
const env = require('../../core/configs/env.config');

/**
 * generate password hash with salt
 * @param password
 * @param salt
 */
exports.createHash =  function(password) {
    const salt = env.secretKeys.salt;

    const passHash = crypto
        .createHmac('SHA256', salt)
        .update(password, 'utf8')
        .digest()
        .toString('base64');

    return encodeURI(passHash);
};
