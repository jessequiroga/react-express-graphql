const { Post } = require('../db/entities/post.entity');

class PostService {

    async createPost(payload) {
        const createdPost = await new Post(payload).save();

        return createdPost.toObject();
    }

    async deletePost(_id, userId) {
        const postToDelete = await Post.find({_id, userId});

        if(postToDelete) {
            return Post.findOneAndDelete({_id});
        }

        return null;
    }
}

exports.PostService = new PostService();
