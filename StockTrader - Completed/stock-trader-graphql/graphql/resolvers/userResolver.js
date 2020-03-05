const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/user");

const userResolver = {
  Query: {
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email: email });
      if (!user) {
        throw new Error("User does not exist!");
      }
      const isEqual = await bcrypt.compare(password, user.password);
      if (!isEqual) {
        throw new Error("Password is incorrect!");
      }
      const token = await jwt.sign(
        { userId: user.id, email: user.email },
        "stocktradersecretkey",
        { expiresIn: "1h" }
      );
      return { userId: user.id, token: token, tokenExpiration: 1 };
    }
  },
  Mutation: {
    createUser: async (_, { userSignUpInput }) => {
      try {
        const existingUsername = await User.findOne({
          username: userSignUpInput.username
        });
        const existingEmail = await User.findOne({
          email: userSignUpInput.email
        });
        if (existingUsername || existingEmail) {
          const error = new Error(`This user is already taken`);
          error.code = 409;
          throw error;
        }

        const hashedPassword = await bcrypt.hash(userSignUpInput.password, 12);

        const user = new User({
          name: userSignUpInput.name,
          lastname: userSignUpInput.lastname,
          username: userSignUpInput.username,
          password: hashedPassword,
          email: userSignUpInput.email
        });
        let newUser = user.save();
        return {
          success: true,
          user: newUser,
          message: "Welcome to Stock Trader. Start learning and investing."
        };
      } catch (err) {
        throw err;
      }
    }
  }
};

module.exports = userResolver;
