import { BaseRepository } from './BaseRepository';
import { Account } from '@promptus/server/models';

class AccountRepository extends BaseRepository<Account> {
    constructor() {
        super(Account);
    }
}
export default new AccountRepository();
