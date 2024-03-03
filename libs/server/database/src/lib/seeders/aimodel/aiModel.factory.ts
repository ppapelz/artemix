import { AIModel } from "@promptus/server/models";
import { setSeederFactory } from "typeorm-extension";

export const AIModelFactory = setSeederFactory(AIModel, () => {
  const aiModel = new AIModel();
  return aiModel;
});
