const Post = require("../../models/post");

const postResolvers = {
  Query: {
    getPosts: async () => {
      try {
        const posts = await Post.find();
        if (posts.length === 0) {
          throw new Error(`There are no Posts in the Database!`);
        }
        return posts;
      } catch (err) {
        throw err;
      }
    },
    getPost: async (_, args) => {
      try {
        const post = await Post.findById(args.id);
        return post;
      } catch (err) {
        throw err;
      }
    }
  },
  Mutation: {
    addPost: async (_, args, context) => {
      const newPost = new Post({
        // id: args.postInput.id,
        title: args.postInput.title,
        description: args.postInput.description
      });

      try {
        await newPost.save();
        return newPost;
      } catch (err) {
        throw err;
      }
    },
    updatePost: async (_, { updatePostInput }) => {
      try {
        const post = await Post.findOne({ _id: updatePostInput.id });

        if (!post) {
          throw new Error(
            `Could not find any post with id: ${updatePostInput.id}`
          );
        }

        if (updatePostInput.title !== undefined) {
          post.title = updatePostInput.title;
        }

        if (updatePostInput.description !== undefined) {
          post.description = updatePostInput.description;
        }

        if (updatePostInput.image !== undefined) {
          post.image = updatePostInput.image;
        }

        return await post.save();
      } catch (err) {
        throw err;
      }
    },
    deletePost: async (_, args) => {
      console.log(args.id);
      try {
        const deletePost = await Post.deleteOne({
          _id: args.id
        });

        if (deletePost.deletedCount == 0) {
          return `No post found with id: ${args.id}`;
        }

        return `Deleted post with id: ${args.id}`;
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = postResolvers;
