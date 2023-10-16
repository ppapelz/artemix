import { ApolloServer } from '@apollo/server';
import { typeDefs } from './schema/types';
import { resolvers } from './schema/resolvers';

export const createApolloServer = () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  });

  return server;
};

