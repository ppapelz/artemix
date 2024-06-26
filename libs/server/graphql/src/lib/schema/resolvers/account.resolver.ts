import { accountService } from '@artemix/server/database';
import {
  AccountType,
  CreateAccountInput,
  FirstAccountReturnType,
} from '@artemix/server/models';
import { Resolver, Arg, Mutation, Query, ID } from 'type-graphql';

@Resolver(AccountType)
export class AccountResolver {

  @Query(() => AccountType, { nullable: true })
  async getAccount(@Arg('id', () => ID) id: string) {
    return await accountService.getAccountById(id);
  }

  @Mutation(() => AccountType)
  async createAccount(
    @Arg('input', () => CreateAccountInput) input: CreateAccountInput
  ): Promise<AccountType> {
    return await accountService.createAccount(input);
  }

  @Mutation(() => FirstAccountReturnType)
  async createFirstAccount(
    @Arg('input', () => CreateAccountInput) input: CreateAccountInput
  ): Promise<FirstAccountReturnType> {
    return await accountService.createFirstAccount(input);
  }
}
