import { DataSource, DataSourceOptions } from "typeorm";
import { Prompt, Variable, AIModel } from "@promptus/server/models";
import { SeederOptions } from "typeorm-extension";
import { VariablesFactory } from "./seeders/variables/variables.factory";
import { PromptsFactory } from "./seeders/prompt/prompts.factory";
import VariablesSeeder from "./seeders/variables/variables.seeder";
import PromptsSeeder from "./seeders/prompt/prompts.seeder";
import { AIModelFactory } from "./seeders/aimodel/aiModel.factory";
import AIModelSeeder from "./seeders/aimodel/aiModel.seeder";

const options: DataSourceOptions & SeederOptions = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    database: "promptus",
    username: "postgres",
    password: "postgres",
    entities: [Prompt, AIModel, Variable],
    factories: [PromptsFactory, AIModelFactory, VariablesFactory],
    seeds: [PromptsSeeder, AIModelSeeder, VariablesSeeder],
    synchronize: true,
    logging: false,
};

export const dataSource = new DataSource(options);