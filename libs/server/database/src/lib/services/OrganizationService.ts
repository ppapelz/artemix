
import { CreateOrganizationInput, Organization } from '@promptus/server/models';
import OrganizationRepository from '../repositories/OrganizationRepository';

class OrganizationService {
    async createOrganization(data: CreateOrganizationInput): Promise<Organization> {
        return await OrganizationRepository.create(data);
    }
}

export const organizationService = new OrganizationService();
