const { gql } = require("apollo-server-express");

userSchema = gql`
  type User {
    id: ID!
    name: String!
    lastname: String!
    username: String!
    password: String!
    email: String!
  }
  input UserSignUpInput {
    name: String!
    lastname: String!
    username: String!
    password: String!
    email: String!
  }
  type SignUpResponse {
    success: Boolean!
    user: User!
    message: String!
  }
  type AuthData {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }
`;

module.exports = userSchema;
