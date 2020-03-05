const { gql } = require("apollo-server-express");
const { makeExecutableSchema } = require("graphql-tools");

const postSchema = require("./postSchema");
const userSchema = require("./userSchema");

const resolvers = require("../resolvers/resolvers");

rootSchema = gql`
  type Query {
    getPosts: [Post!]!
    getPost(id: ID!): Post!
    login(email: String!, password: String!): AuthData!
  }

  type Mutation {
    addPost(postInput: PostInput): Post
    updatePost(updatePostInput: UpdatePostInput): Post
    deletePost(id: ID!): String!
    createUser(userSignUpInput: UserSignUpInput): SignUpResponse!
  }
`;

const schema = makeExecutableSchema({
  typeDefs: [rootSchema, postSchema, userSchema],
  resolvers
});

module.exports = schema;
