
import { CreateOrganizationInput, Organization } from '@promptus/server/models';
import OrganizationRepository from '../repositories/OrganizationRepository';

class OrganizationService {

    async getOrganizationById(id: number): Promise<Organization | null> {
        return await OrganizationRepository.findById(id);
    }

    async createOrganization(data: CreateOrganizationInput): Promise<Organization> {
        return await OrganizationRepository.create(data);
    }
}

export const organizationService = new OrganizationService();
