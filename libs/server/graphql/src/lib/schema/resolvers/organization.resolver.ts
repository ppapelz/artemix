import { organizationService } from '@promptus/server/database';
import {
    CreateOrganizationInput,
    OrganizationType,
} from '@promptus/server/models';
import { Resolver, Arg, Mutation, Query, ID } from 'type-graphql';

@Resolver(OrganizationType)
export class OrganizationResolver {

    @Mutation(() => OrganizationType)
    async createOrganization(
        @Arg('input', () => CreateOrganizationInput) input: CreateOrganizationInput
    ): Promise<OrganizationType> {
        return await organizationService.createOrganization(input);
    }

    @Query(() => [OrganizationType], { nullable: true })
    async getOrganizationsByAccountID(@Arg('id', () => ID) id: string): Promise<OrganizationType[] | null> {
        return await organizationService.getOrganizationsByAccountID(id);
    }

    @Query(() => OrganizationType, { nullable: true })
    async getOrganization(@Arg('id', () => ID) id: string): Promise<OrganizationType | null> {
        return await organizationService.getOrganizationById(id);
    }
}
