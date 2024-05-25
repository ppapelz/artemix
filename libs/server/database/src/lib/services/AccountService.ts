
import { AccountEntity, CreateAccountInput, FirstAccountReturnType, OrganizationEntity } from '@artemix/server/models';
import AccountRepository from '../repositories/AccountRepository';
import { dataSource } from '../server-database';

class AccountService {
    async createAccount(data: CreateAccountInput): Promise<AccountEntity> {
        return await AccountRepository.create(data);
    }

    async getAccountById(id: string): Promise<AccountEntity | null> {
        return await AccountRepository.findById(id);
    }

    async createFirstAccount(data: CreateAccountInput): Promise<FirstAccountReturnType> {
        return await dataSource.transaction(async transactionalEntityManager => {
            const orgName = data?.displayName ? data.displayName : data.email;

            const org = transactionalEntityManager.create(OrganizationEntity, { name: orgName });
            await transactionalEntityManager.save(OrganizationEntity, org);

            const accountData = {
                ...data,
                organizations: [org],
            };
            const account = transactionalEntityManager.create(AccountEntity, accountData as AccountEntity);
            await transactionalEntityManager.save(AccountEntity, account);

            return {accountId: account.id, orgId: org.id};
        });
    }
}

export const accountService = new AccountService();
