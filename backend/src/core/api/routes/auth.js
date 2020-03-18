const { signUpValidation, signInValidation } = require('../../../utils/validators/auth.validator');
const { AuthService } = require('../../services/auth.service');

module.exports = (router) => {
    const routes = router();

    routes.post('/login', signUpValidation, async function (req, res) {
        await AuthService.signUp(req, res);
    });
    routes.post('/sign-in', signInValidation, async function (req, res) {
        await AuthService.signIn(req, res);
    });

    return routes;
};
