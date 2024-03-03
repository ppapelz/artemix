import { accountService } from '@promptus/server/database';
import {
  Account,
  CreateAccountInput,
} from '@promptus/server/models';
import { Resolver, Arg, Mutation } from 'type-graphql';

@Resolver(Account)
export class AccountResolver {
  @Mutation(() => Account)
  async createAccount(
    @Arg('input', () => CreateAccountInput) input: CreateAccountInput
  ): Promise<Account> {
    return await accountService.createAccount(input);
  }

  @Mutation(() => Account)
  async createFirstAccount(
    @Arg('input', () => CreateAccountInput) input: CreateAccountInput
  ): Promise<Account> {
    return await accountService.createFirstAccount(input);
  }
}
