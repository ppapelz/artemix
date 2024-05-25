import { DataSource, DataSourceOptions } from "typeorm";
import { AccountEntity, OrganizationEntity, ProjectEntity } from "@artemix/server/models";
import { SeederOptions } from "typeorm-extension";
import { AccountFactory } from "./seeders/account/account.factory";
import { OrganizationFactory } from "./seeders/organization/organization.factory";
import OrganizationSeeder from "./seeders/organization/organization.seeder";
import AccountSeeder from "./seeders/account/account.seeder";

const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "artemix",
    username: "postgres",
    password: "postgres",
    entities: [OrganizationEntity, AccountEntity, ProjectEntity],
    factories: [OrganizationFactory, AccountFactory],
    seeds: [OrganizationSeeder, AccountSeeder],
    synchronize: true,
    logging: false,
};

export const dataSource = new DataSource(options);