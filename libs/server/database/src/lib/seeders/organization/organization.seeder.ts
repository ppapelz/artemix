import { Organization } from "@promptus/server/models";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class OrganizationSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const organizationFactory = factoryManager.get(Organization);

        await organizationFactory.save({
            id: "1",
            name: "Ozkan Organization",
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
}
