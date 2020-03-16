const {
    GraphQLSchema,
    GraphQLObjectType,
} = require('graphql');
const { UsersQuery, UserQuery } = require('./queries/user.query');
const { UserUpdate } = require('./mutations/user.mutation');
const { PostCreate, PostDelete } = require('./mutations/post.mutation');

const RootQuery = new GraphQLObjectType({
    name: 'rootQuery',
    fields: () => ({
        users: UsersQuery,
        user: UserQuery
    }),
});

const RootMutation = new GraphQLObjectType({
    name: 'rootMutation',
    fields: () => ({
        user: UserUpdate,
        postCreate: PostCreate,
        postDelete: PostDelete,
    }),
});

exports.schema = new GraphQLSchema({
    query: RootQuery,
    mutation: RootMutation,
});
