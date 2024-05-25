// prompts.factory.ts
import { Prompt } from "@artemix/server/models";
import { setSeederFactory } from "typeorm-extension";

export const PromptsFactory = setSeederFactory(Prompt, () => {
  const prompt = new Prompt();
  prompt.content = 'Prompt 1 content';
  prompt.name = 'Prompt1';
  prompt.createdAt = new Date();
  prompt.updatedAt = new Date();
  return prompt;
});
