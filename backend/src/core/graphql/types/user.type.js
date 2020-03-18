const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = require('graphql');
const { PostType, PublicPostType } = require('../types/post.type');
const { PostService } = require('../../services/post.service');
const { paginationInput } = require('../inputs/pagination.input');

exports.PublicUserType = new GraphQLObjectType({
    name: 'PublicUser',
    fields: {
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
        posts: {
            type: GraphQLList(PublicPostType),
            args: {
                pagination: {
                    type: paginationInput
                }
            },
            resolve: async (user, { pagination } = {}) => {
                return await PostService.getPostsByQuery({userId: user._id}, pagination);
            }
        }
    }
});

exports.UserType = new GraphQLObjectType({
    name: 'User',
    fields: {
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
        posts: {
            type: GraphQLList(PostType),
            args: {
                pagination: {
                    type: paginationInput
                }
            },
            resolve: async (user, { pagination } = {}) => {
                return await PostService.getPostsByQuery({userId: user._id}, pagination);
            }
        }
    }
});
