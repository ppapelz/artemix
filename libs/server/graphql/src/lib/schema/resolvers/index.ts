import { NonEmptyArray } from 'type-graphql';
import { AIModelResolver } from './aiModel.resolver';
import { PromptResolver } from './prompt.resolver';
import { VariableResolver } from './variable.resolver';
type ResolverType =
  | typeof PromptResolver
  | typeof VariableResolver
  | typeof AIModelResolver;

export const resolvers: NonEmptyArray<ResolverType> = [
  PromptResolver,
  VariableResolver,
  AIModelResolver,
];
