import { AccountEntity, OrganizationEntity } from "@artemix/server/models";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";
export default class AccountSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const accountFactory = factoryManager.get(AccountEntity);
        const orgRepo = dataSource.getRepository(OrganizationEntity);
        const orgData = await orgRepo.findOneBy({ id: "1" })

        await accountFactory.save({
            id: "1",
            email: "ozkanlang@gmail.com",
            displayName: 'Ozkan Canli',
            organizations: [orgData],
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
}
