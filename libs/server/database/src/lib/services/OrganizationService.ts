
import { CreateOrganizationInput, Organization } from '@promptus/server/models';
import OrganizationRepository from '../repositories/OrganizationRepository';

class OrganizationService {

    async getOrganizationById(id: string): Promise<Organization | null> {
        return await OrganizationRepository.findByOrgId(id);
    }

    async getOrganizationsByAccountID(id: string): Promise<Organization[] | null> {
        return await OrganizationRepository.findByAccountID(id);
    }

    async createOrganization(data: CreateOrganizationInput): Promise<Organization> {
        return await OrganizationRepository.create(data);
    }
}

export const organizationService = new OrganizationService();
