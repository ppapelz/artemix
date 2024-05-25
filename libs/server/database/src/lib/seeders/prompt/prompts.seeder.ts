// prompts.seeder.ts
import { Prompt } from "@artemix/server/models";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from 'typeorm-extension';

export default class PromptsSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const promptsFactory = factoryManager.get(Prompt);

    await promptsFactory.save({
      content: 'Prompt 1 content',
      name: 'Prompt1',
      createdAt: new Date(),
      updatedAt: new Date()
    });
    await promptsFactory.save({
      content: 'Prompt 2 content',
      name: 'Prompt2',
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}
