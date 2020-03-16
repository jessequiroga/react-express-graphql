const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLNonNull,
} = require('graphql');


exports.postCreateInput = new GraphQLInputObjectType({
    name: 'postCreateInput',
    fields: {
        title: {
            type: GraphQLNonNull(GraphQLString),
        },
        description: {
            type: GraphQLString
        }
    }
});