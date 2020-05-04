import { GraphQLServer, PubSub } from "graphql-yoga";

import { resolvers } from "./resolvers/index";

const PORT: number = 4040 || process.env.PORT;
const pubsub = new PubSub();

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: {
    pubsub,
  },
});

server.start({ port: PORT }, () => {
  console.log(`Server is running on port ${PORT}`);
});
