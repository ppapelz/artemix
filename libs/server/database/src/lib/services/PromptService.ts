
import { Prompt } from '@promptus/server/models';
import PromptRepository from '../repositories/PromptRepository';

class PromptService {
    async createPrompt(data: Prompt): Promise<Prompt> {
        return await PromptRepository.create(data);
    }

    async getPromptById(id: number): Promise<Prompt | null> {
        return await PromptRepository.findById(id);
    }

    async getAllPrompts(): Promise<Prompt[]> {
        return await PromptRepository.findAll();
    }

    async updatePrompt(id: number, data: Prompt): Promise<void> {
        return await PromptRepository.update(id, data);
    }

    async deletePrompt(id: number): Promise<void> {
        return await PromptRepository.delete(id);
    }
}

export const promptService = new PromptService();
