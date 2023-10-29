import OpenAI from 'openai';
import { getPromptData } from './preparePrompt';

export async function createChatCompletion(promptId: number) {
  const prompt = await getPromptData(promptId);

  const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'],
    organization: process.env['OPENAI_ORG_ID'],
  });

  const gptResponse = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [{ "role": "system", "content": "You are a helpful assistant." },
    { "role": "user", "content": "Who won the world series in 2020?" },
    { "role": "assistant", "content": "The Los Angeles Dodgers won the World Series in 2020." },
    { "role": "user", "content": "Where was it played?" }],
  });

  console.log(gptResponse);

}
