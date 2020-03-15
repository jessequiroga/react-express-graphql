const express = require('express');
const { dbConnection } = require('./core/db/index.db');
const bodyParser = require('body-parser');
const env = require('./utils/configs/env.config');
const { graphql } = require('./core/middlewares/graphql.middleware');
const cors = require('cors');
const { appRouter } = require('./core/api/router');
const { validateError } = require('./core/middlewares/validate-error.middleware');
const passport = require('passport');
const { jwtStrategy } = require('./utils/strategies/jwt.strategy');
const helmet = require('helmet');

// create our express app
const app = express();

// enable helmet security
app.use(helmet());
// enable body parser
app.use(bodyParser.json());
// init router
appRouter(app);
// enable CORS
app.use(cors());
// enable passport jwt strategy
passport.use(jwtStrategy);
// enable graphql queries and mutations
app.use(
    '/graphql',
    passport.authenticate('jwt', { session: false }),
    graphql
);
// enable error validation
app.use(validateError);

// run server
app.listen(env.app.port, (error) => {
    if(error) {
        console.error(error);
        return;
    }

    console.log(`GraphQl http://localhost:${env.app.port}/graphql`);
    console.log(`Server http://localhost:${env.app.port}`);
});
