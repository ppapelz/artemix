import OpenAI from 'openai';
import { Prompt } from '@promptus/server/models';
import { promptService } from '@promptus/server/database';

const getPromptData = async (promptId: number): Promise<Prompt | null> => {
  try {
    await promptService.getPromptById(promptId);
  } catch (error) {
    return null;
  }
};

export function createChatComletion(promptId: string) {
  prompt;
  const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
    organization: process.env['OPENAI_ORG_ID'],
  });
}
