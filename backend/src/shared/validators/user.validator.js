const { validate, Joi } = require('express-validation');

exports.signUpUserValidation = validate({
    body: Joi.object({
        email: Joi
            .string()
            .email()
            .required(),
        password: Joi
            .string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required(),
        nickname: Joi
            .string()
            .required(),
    }),
});

exports.signInUserValidation = validate({
    body: Joi.object({
        email: Joi
            .string()
            .email()
            .required(),
        password: Joi
            .string()
            .regex(/[a-zA-Z0-9]{3,30}/)
            .required(),
    })
});
