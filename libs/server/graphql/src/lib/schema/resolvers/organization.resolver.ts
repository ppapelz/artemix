import { organizationService } from '@promptus/server/database';
import {
    CreateOrganizationInput,
    OrganizationType,
} from '@promptus/server/models';
import { Resolver, Arg, Mutation } from 'type-graphql';

@Resolver(OrganizationType)
export class OrganizationResolver {

    @Mutation(() => OrganizationType)
    async createOrganization(
        @Arg('input', () => CreateOrganizationInput) input: CreateOrganizationInput
    ): Promise<OrganizationType> {
        return await organizationService.createOrganization(input);
    }
}
