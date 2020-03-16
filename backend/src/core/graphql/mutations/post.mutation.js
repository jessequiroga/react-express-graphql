const { PostType } = require('../types/post.type');
const { postCreateInput } = require('../inputTypes/post.inputType');
const { PostService } = require('../../services/post.service');
const { GraphQLID } = require('graphql');

exports.PostCreate = {
    type: PostType,
    args: {
        post: {
            type: postCreateInput
        }
    },
    resolve: async (_, { post }, user) => {
        const userId = user._id;

        return PostService.createPost({ ...post, userId });
    }
};

exports.PostDelete = {
    type: PostType,
    args: {
        id: {
            type: GraphQLID,
        }
    },
    resolve: async (_, { id }, { user }) => {
        return PostService.deletePost(id, user._id);
    }
}