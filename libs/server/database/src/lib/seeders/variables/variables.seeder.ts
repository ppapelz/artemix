import { Variable } from "@promptus/server/models";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class VariablesSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager,
    ): Promise<any> {
        const variableFactory = factoryManager.get(Variable);

        await variableFactory.saveMany(2);
    }
}
