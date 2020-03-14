const { signUpUserValidation, signInUserValidation } = require('../../../shared/validators/user.validator');
const { AuthService } = require('../../services/auth.service');

module.exports = (router) => {
    const routes = router();

    routes.post('/sign-up', signUpUserValidation, async function (req, res) {
        await AuthService.signUp(req, res);
    });
    routes.post('/sign-in', signInUserValidation, async function (req, res) {
        await AuthService.signIn(req, res);
    });

    return routes;
};
