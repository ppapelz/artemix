import { aiModelService, promptService, variableService } from '@promptus/server/database';
import { PromptDTO } from '../models/prompt';

export async function getPromptData(promptId: number): Promise<PromptDTO | null> {
  try {
    const [promptMeta, aiModel, variables] = await Promise.all([
      promptService.getPromptById(promptId),
      aiModelService.getAIModelByPromptId(promptId),
      variableService.getVariablesByPromptId(promptId)
    ]);

    const prompt: PromptDTO = {
      ...promptMeta,
      aiModel,
      variables,
    };

    return prompt;

  } catch (error) {
    return null;
  }
};
