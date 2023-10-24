import { ApolloServer } from '@apollo/server';
import { buildSchema } from 'type-graphql';
import { resolvers } from './schema/resolvers';

export const createApolloServer = async () => {
  const schema = await buildSchema({
    resolvers: resolvers
  });

  const server = new ApolloServer({ schema });

  return server;
};

