const {
    GraphQLInputObjectType,
    GraphQLString,
    GraphQLID
} = require('graphql');

exports.updateUserInput = new GraphQLInputObjectType({
    name: 'updateUserInput',
    fields: {
        nickname: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
    },
});

exports.usersQueryInput = new GraphQLInputObjectType({
    name: 'getUsersFilter',
    fields: {
        _id: {
            type: GraphQLID,
        },
        nickname: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
    }
})