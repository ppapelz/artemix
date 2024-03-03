import { Organization } from "@promptus/server/models";
import { setSeederFactory } from "typeorm-extension";

export const OrganizationFactory = setSeederFactory(Organization, () => {
    const organization = new Organization();
    organization.id = 1;
    organization.name = 'Ozkan Organization';
    organization.createdAt = new Date();
    organization.updatedAt = new Date();
    return organization;
});
