import { organizationService } from '@promptus/server/database';
import {
    CreateOrganizationInput,
    Organization,
} from '@promptus/server/models';
import { Resolver, Arg, Mutation } from 'type-graphql';
 
@Resolver(Organization)
export class OrganizationResolver {

    @Mutation(() => Organization)
    async createOrganization(
        @Arg('input', () => CreateOrganizationInput) input: CreateOrganizationInput
    ): Promise<Organization> {
        return await organizationService.createOrganization(input);
    }
}
