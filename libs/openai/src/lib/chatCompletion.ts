import OpenAI from 'openai';
import { Prompt, promptService } from '@promptus/db';

const getPromptData = async (promptId: number): Promise<Prompt | null> => {

    try {
        await promptService.getPromptById(promptId);
    } catch (error) {

        return null;
    }
}

export function createChatComletion(promptId: string) {

    prompt
    const openai = new OpenAI({
        apiKey: process.env["OPENAI_API_KEY"],
        organization: process.env["OPENAI_ORG_ID"],
    });

}