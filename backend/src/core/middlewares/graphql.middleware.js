const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');


exports.graphql = graphqlHTTP((req) => ({
    graphiql: true,
    context: {
        user: req.user,
    },
}));