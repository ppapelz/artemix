import { BaseRepository } from './BaseRepository';
import { OrganizationEntity } from '@promptus/server/models';

class OrganizationRepository extends BaseRepository<OrganizationEntity> {
    constructor() {
        super(OrganizationEntity);
    }
}
export default new OrganizationRepository();
