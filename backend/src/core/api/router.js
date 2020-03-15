const { Router } = require('express');
const inject = require('require-all');

exports.appRouter = function (app) {
    const controllers = inject(__dirname + '/routes');

    for (const name in controllers) {
        app.use(`/api/${name}`, controllers[name](Router));
    }
};
