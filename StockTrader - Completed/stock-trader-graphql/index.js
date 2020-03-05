const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");

// const isAuth = require("./middleware/is-auth");

const schema = require("./graphql/schema/schema");

const server = new ApolloServer({
  schema
  // context: async ({ req }) => {
  //   // let Auth = isAuth;
  //   // return {
  //   //   Auth
  //   // };

  //   // Get the user token from the headers.
  //   const authorization = req.headers.authorization || "";

  //   const token = authorization.split(" ")[1];

  //   decodedToken = await jwt.verify(token, "stocktradersecretkey");

  //   // console.log("decodedToken");
  //   // console.log(decodedToken);

  //   if (!decodedToken) {
  //     return {
  //       isAuth: true,
  //       decodedToken
  //     };
  //   }
  // }
});

const app = express();

server.applyMiddleware({ app });

 app.listen({ port: 4001 }, () =>
   console.log("Now browse to http://localhost:4001" + server.graphqlPath)
 );

mongoose.Promise = global.Promise;
mongoose
  .connect(
    `mongodb+srv://ArianKrasniqi:ariani123@cluster0-uq92a.mongodb.net/BlogPosts?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    }
  )
  .then(() => {
    app.listen({ port: 4001 }, () => {
      console.log("Now browse to http://localhost:4001" + server.graphqlPath);
    });
  })
  .catch(err => {
    console.log(err);
  });
