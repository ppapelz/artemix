import { AIModel } from "@artemix/server/models";
import { DataSource } from "typeorm";
import { Seeder, SeederFactoryManager } from "typeorm-extension";

export default class AIModelSeeder implements Seeder {
  public async run(
    dataSource: DataSource,
    factoryManager: SeederFactoryManager,
  ): Promise<any> {
    const aiModelFactory = factoryManager.get(AIModel);

    await aiModelFactory.save({
      modelType: 'Type1',
      aiConnectionToken: 'Token1',
      temperature: 0.8,
      maxLength: 100,
      stop: 'Stop1',
      presencePenalty: 0.2,
      frequencyPenalty: 0.3,
      promptId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    });
    await aiModelFactory.save({
      modelType: 'Type2',
      aiConnectionToken: 'Token2',
      temperature: 0.7,
      maxLength: 150,
      stop: 'Stop2',
      presencePenalty: 0.1,
      frequencyPenalty: 0.4,
      promptId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    });
  }
}
