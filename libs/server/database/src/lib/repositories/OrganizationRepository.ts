import { BaseRepository } from './BaseRepository';
import { Organization } from '@promptus/server/models';

class OrganizationRepository extends BaseRepository<Organization> {
    constructor() {
        super(Organization);
    }
}
export default new OrganizationRepository();
