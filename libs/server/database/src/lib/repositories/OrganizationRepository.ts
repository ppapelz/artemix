import { BaseRepository } from './BaseRepository';
import { Organization, OrganizationEntity } from '@artemix/server/models';

class OrganizationRepository extends BaseRepository<OrganizationEntity> {
    constructor() {
        super(OrganizationEntity);
    }

    async findByAccountID(accountID: string): Promise<Organization[] | null> {
        const organizations = await this.repository
            .createQueryBuilder('organization')
            .leftJoinAndSelect('organization.accounts', 'account')
            .leftJoinAndSelect('organization.projects', 'project')
            .where('account.id = :accountID', { accountID })
            .getMany();

        return organizations.length > 0 ? organizations : null;
    }

    async findByOrgId(orgID: string): Promise<Organization | null> {
        try {
            const organization = await this.repository
                .createQueryBuilder('organization')
                .leftJoinAndSelect('organization.projects', 'project')
                .where('organization.id = :orgID', { orgID })
                .getOne();

            return organization;
        } catch (error) {
            console.error('Failed to find organization by ID:', error);
            throw new Error('Database operation failed');
        }
    }

}
export default new OrganizationRepository();
