const { merge } = require("lodash");

const postResolver = require("./postResolver");
const userResolver = require("./userResolver");

const resolvers = merge(postResolver, userResolver);

module.exports = resolvers;
