import { GraphQLServer, PubSub } from "graphql-yoga";

import { resolvers } from "./resolvers/index";

const PORT: any = process.env.PORT || 4040;
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
