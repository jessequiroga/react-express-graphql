const {
    GraphQLID,
    GraphQLString,
    GraphQLList,
} = require('graphql');

const { UsersType, UserType } = require('../types/user.type');
const { UserService } = require('../../services/user.service');

exports.UsersQuery = {
    type: new GraphQLList(UsersType),
    args: {
        _id: {
            type: GraphQLID,
        },
        nickname: {
            type: GraphQLString,
        },
        email: {
            type: GraphQLString,
        },
    },
    resolve: (_, args, { user }) => {
        return UserService.findUsersByQuery(args)
    },
};

exports.UserQuery = {
    type: UserType,
    resolve: (_, args, { user }) => {
        return user;
    },
};
