const graphqlHTTP = require('express-graphql');
const { schema } = require('../graphql/index');

exports.graphql = graphqlHTTP(({ user }) => ({
    graphiql: true,
    schema,
    context: {
        user,
    },
}));
