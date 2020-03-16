const {
    GraphQLList,
} = require('graphql');

const { PublicUserType, UserType } = require('../types/user.type');
const { UserService } = require('../../services/user.service');
const { usersQueryInput } = require('../inputTypes/user.inputType');

exports.UsersQuery = {
    type: new GraphQLList(PublicUserType),
    args: {
        filter: {
            type: usersQueryInput,
        }
    },
    resolve: (_, { filter }, { user }) => {
        return UserService.findUsersByQuery(filter)
    },
};

exports.UserQuery = {
    type: UserType,
    resolve: (_, args, { user }) => {
        return user;
    },
};
