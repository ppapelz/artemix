
import { Account, CreateAccountInput, Organization } from '@promptus/server/models';
import AccountRepository from '../repositories/AccountRepository';
import { dataSource } from '../server-database';

class AccountService {
    async createAccount(data: CreateAccountInput): Promise<Account> {
        return await AccountRepository.create(data);
    }

    async createFirstAccount(data: CreateAccountInput): Promise<Account> {
        return await dataSource.transaction(async transactionalEntityManager => {
            const orgName = data?.displayName ? data.displayName : data.email;

            const org = transactionalEntityManager.create(Organization, { name: orgName });
            await transactionalEntityManager.save(Organization, org);

            const accountData = {
                ...data,
                organizations: [org],
            };
            const account = transactionalEntityManager.create(Account, accountData as Account);
            await transactionalEntityManager.save(Account, account);

            return account;
        });
    }
}

export const accountService = new AccountService();
