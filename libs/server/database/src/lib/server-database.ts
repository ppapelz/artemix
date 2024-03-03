import { DataSource, DataSourceOptions } from "typeorm";
import { Account, Organization } from "@promptus/server/models";
import { SeederOptions } from "typeorm-extension";
import { AccountFactory } from "./seeders/account/account.factory";
import { OrganizationFactory } from "./seeders/organization/organization.factory";
import OrganizationSeeder from "./seeders/organization/organization.seeder";
import AccountSeeder from "./seeders/account/account.seeder";

const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "promptus",
    username: "postgres",
    password: "postgres",
    entities: [Organization, Account],
    factories: [OrganizationFactory, AccountFactory],
    seeds: [OrganizationSeeder, AccountSeeder],
    synchronize: true,
    logging: false,
};

export const dataSource = new DataSource(options);