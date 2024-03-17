import { OrganizationEntity } from "@promptus/server/models";
import { setSeederFactory } from "typeorm-extension";

export const OrganizationFactory = setSeederFactory(OrganizationEntity, () => {
    const organization = new OrganizationEntity();
    organization.id = "1";
    organization.name = 'First Org';
    organization.createdAt = new Date();
    organization.updatedAt = new Date();
    return organization;
});
