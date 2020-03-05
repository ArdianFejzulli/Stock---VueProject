const { gql } = require("apollo-server-express");

postSchema = gql`
  type Post {
    id: ID!
    title: String!
    description: String!
    image: String
  }

  input PostInput {
    title: String!
    description: String!
    image: String
  }

  input UpdatePostInput {
    id: ID!
    title: String
    description: String
    image: String
  }
`;

module.exports = postSchema;
