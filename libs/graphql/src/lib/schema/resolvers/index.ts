import {promptResolver} from './prompt.resolver';
import { variableResolver} from './variable.resolver';
import { aiModelResolver} from './aiModel.resolver';

export const resolvers = {
  Query: {
    ...promptResolver.Query,
    ...variableResolver.Query,
    ...aiModelResolver.Query
  },
  Mutation: {
    ...promptResolver.Mutation,
    ...variableResolver.Mutation,
    ...aiModelResolver.Mutation
  }
};