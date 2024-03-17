
import { CreateOrganizationInput, Organization, OrganizationEntity } from '@promptus/server/models';
import OrganizationRepository from '../repositories/OrganizationRepository';

class OrganizationService {

    async getOrganizationById(id: number): Promise<OrganizationEntity | null> {
        return await OrganizationRepository.findById(id);
    }

    async getOrganizationsByAccountID(id: string): Promise<Organization[] | null> {
        return await OrganizationRepository.findByAccountID(id);
    }

    async createOrganization(data: CreateOrganizationInput): Promise<OrganizationEntity> {
        return await OrganizationRepository.create(data);
    }
}

export const organizationService = new OrganizationService();
