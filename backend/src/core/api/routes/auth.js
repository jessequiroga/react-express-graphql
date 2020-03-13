const { createUserValidation } = require('../../../shared/validators/user.validator');
const { AuthService } = require('../../services/auth.service');

module.exports = (router) => {
    const routes = router();

    routes.post('/sign-up', createUserValidation, AuthService.signUp);

    return routes;
};
