const { GraphQLInputObjectType, GraphQLString } = require('graphql');

exports.userInputType = new GraphQLInputObjectType({
    name: 'updateUserFields',
    fields: {
        nickname: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
    },
});
