import { accountService } from '@promptus/server/database';
import {
  AccountType,
  CreateAccountInput,
} from '@promptus/server/models';
import { Resolver, Arg, Mutation } from 'type-graphql';

@Resolver(AccountType)
export class AccountResolver {
  @Mutation(() => AccountType)
  async createAccount(
    @Arg('input', () => CreateAccountInput) input: CreateAccountInput
  ): Promise<AccountType> {
    return await accountService.createAccount(input);
  }

  @Mutation(() => AccountType)
  async createFirstAccount(
    @Arg('input', () => CreateAccountInput) input: CreateAccountInput
  ): Promise<AccountType> {
    return await accountService.createFirstAccount(input);
  }
}
