import { BaseRepository } from './BaseRepository';
import { AccountEntity } from '@promptus/server/models';

class AccountRepository extends BaseRepository<AccountEntity> {
    constructor() {
        super(AccountEntity);
    }
}
export default new AccountRepository();
