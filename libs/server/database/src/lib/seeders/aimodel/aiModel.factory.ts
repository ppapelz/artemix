import { AIModel } from "@promptus/server/models";
import { setSeederFactory } from "typeorm-extension";

export const AIModelFactory = setSeederFactory(AIModel, () => {
  const aiModel = new AIModel();
  aiModel.modelType = 'Type1';
  aiModel.aiConnectionToken = 'Token1';
  aiModel.temperature = 0.8;
  aiModel.maxLength = 100;
  aiModel.stop = 'Stop1';
  aiModel.presencePenalty = 0.2;
  aiModel.frequencyPenalty = 0.3;
  aiModel.promptId = 1;
  aiModel.createdAt = new Date();
  aiModel.updatedAt = new Date();

  return aiModel;
});
