const { schema } = require('../graphql');
const { ApolloServer } = require('apollo-server-express');

exports.initGraphql = (app) => {
    const graphQLServer = new ApolloServer({
        schema,
        context: ({ req }) => req.user,
    });

    graphQLServer.applyMiddleware({
        app,
    });
};
