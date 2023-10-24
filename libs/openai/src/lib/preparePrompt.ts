import { Prompt, promptService } from "@promptus/db";

export async function getPromptData(promptId: number): Promise<Prompt | null> {

    try {
        await promptService.getPromptById(promptId);
    } catch (error) {
        return null;
    }
}

