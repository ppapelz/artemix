import { OrganizationEntity } from "@promptus/server/models";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class OrganizationSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {


        const organizationRepository = dataSource.getRepository(OrganizationEntity);

        const existingOrganization = await organizationRepository.findOne({
            where: [
                { id: "1" },
                { name: "First Org" }
            ],
        });

        if (!existingOrganization) {
            const organizationFactory = factoryManager.get(OrganizationEntity);

            await organizationFactory.save({
                id: "1",
                name: "First Org",
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

    }
}
