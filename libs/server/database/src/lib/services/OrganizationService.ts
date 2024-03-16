
import { CreateOrganizationInput, OrganizationEntity } from '@promptus/server/models';
import OrganizationRepository from '../repositories/OrganizationRepository';

class OrganizationService {

    async getOrganizationById(id: number): Promise<OrganizationEntity | null> {
        return await OrganizationRepository.findById(id);
    }

    async createOrganization(data: CreateOrganizationInput): Promise<OrganizationEntity> {
        return await OrganizationRepository.create(data);
    }
}

export const organizationService = new OrganizationService();
