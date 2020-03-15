const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID
} = require('graphql');

exports.UsersType = new GraphQLObjectType({
    name: 'Users',
    description: 'This represents a User List',
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve: (user) => user._id,
        },
        email: {
            type: GraphQLString,
            resolve: (user) => user.email,
        },
        createdAt: {
            type: GraphQLString,
            resolve: (user) => user.createdAt,
        },
        nickname: {
            type: GraphQLString,
            resolve: (user) => user.nickname,
        },
    })
});

exports.UserType = new GraphQLObjectType({
    name: 'User',
    description: 'This represents a User',
    fields: () => ({
        id: {
            type: GraphQLID,
            resolve: (user) => user._id,
        },
        email: {
            type: GraphQLString,
            resolve: (user) => user.email,
        },
        createdAt: {
            type: GraphQLString,
            resolve: (user) => user.createdAt,
        },
        nickname: {
            type: GraphQLString,
            resolve: (user) => user.nickname,
        },
    })
});
