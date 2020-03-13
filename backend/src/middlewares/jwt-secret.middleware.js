const jwt = require('express-jwt');

exports.authMiddleware = jwt({
    secret: 'somesuperdupersecret'
})