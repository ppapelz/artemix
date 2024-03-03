import { NonEmptyArray } from 'type-graphql';
import { AIModelResolver } from './aiModel.resolver';
import { PromptResolver } from './prompt.resolver';
import { VariableResolver } from './variable.resolver';
import { AccountResolver } from './account.resolver';
import { OrganizationResolver } from './organization.resolver';
type ResolverType =
  | typeof PromptResolver
  | typeof VariableResolver
  | typeof AIModelResolver
  | typeof AccountResolver
  | typeof OrganizationResolver;

export const resolvers: NonEmptyArray<ResolverType> = [
  PromptResolver,
  VariableResolver,
  AIModelResolver,
  AccountResolver,
  OrganizationResolver
];
