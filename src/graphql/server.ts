import { ApolloServer } from "apollo-server-express";

import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

export async function server(app) {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server.start();
  server.applyMiddleware({ app });
}
