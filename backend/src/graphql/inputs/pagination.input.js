const {
    GraphQLInputObjectType,
    GraphQLInt
} = require('graphql');


exports.paginationInput = new GraphQLInputObjectType({
    name: 'paginationInput',
    fields: {
        skip: {
            type: GraphQLInt,
        },
        limit: {
            type: GraphQLInt,
        },
    }
});

