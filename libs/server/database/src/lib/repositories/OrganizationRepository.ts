import { BaseRepository } from './BaseRepository';
import { Organization, OrganizationEntity } from '@promptus/server/models';

class OrganizationRepository extends BaseRepository<OrganizationEntity> {
    constructor() {
        super(OrganizationEntity);
    }

    async findByAccountID(accountID: string): Promise<Organization[] | null> {
        const organizations = await this.repository
            .createQueryBuilder('organization')
            .leftJoinAndSelect('organization.accounts', 'account')
            .where('account.id = :accountID', { accountID })
            .getMany();

        return organizations.length > 0 ? organizations : null;
    }
}
export default new OrganizationRepository();
