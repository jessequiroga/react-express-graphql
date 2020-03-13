const crypto = require('crypto');
const env = require('../../core/configs/env.config');

/**
 * generate password hash with salt
 * @param password
 * @param salt
 */
exports.createHash =  function(password) {
    const passHash = crypto
        .createHmac('SHA256', env.secretKeys.salt)
        .update(password, 'utf8')
        .digest()
        .toString('base64');

    return encodeURI(passHash);
};