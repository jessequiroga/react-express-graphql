const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLID,
    GraphQLList
} = require('graphql');

exports.PostType = new GraphQLObjectType({
    name: 'Post',
    fields: {
        id: {
            type: GraphQLID,
            resolve: (post) => post._id,
        },
        title: {
            type: GraphQLString,
            resolve: (post) => post.title,
        },
        userId: {
            type: GraphQLString,
            resolve: (post) => post.userId,
        },
        createdAt: {
            type: GraphQLString,
            resolve: (post) => post.createdAt,
        },
        images: {
            type: GraphQLList(GraphQLString),
            resolve: (post) => post.images,
        },
        description: {
            type: GraphQLString,
            resolve: (post) => post.description,
        }
    }
});