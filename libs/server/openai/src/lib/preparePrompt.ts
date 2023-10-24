import { promptService } from '@promptus/server/database';
import { Prompt } from '@promptus/server/models';

export async function getPromptData(promptId: number): Promise<Prompt | null> {
  try {
    await promptService.getPromptById(promptId);
  } catch (error) {
    return null;
  }
}
