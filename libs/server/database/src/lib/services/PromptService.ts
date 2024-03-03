
import { CreatePromptInput, Prompt, UpdatePromptInput } from '@promptus/server/models';
import PromptRepository from '../repositories/PromptRepository';

class PromptService {
    async createPrompt(data: CreatePromptInput): Promise<Prompt> {
        return await PromptRepository.create(data);
    }

    async getPromptById(id: number): Promise<Prompt | null> {
        return await PromptRepository.findById(id);
    }

    async getAllPrompts(): Promise<Prompt[]> {
        return await PromptRepository.findAll();
    }

    async updatePrompt(id: number, data: UpdatePromptInput): Promise<number> {
        return await PromptRepository.update(id, data);
    }

    async deletePrompt(id: number): Promise<boolean> {
        return await PromptRepository.delete(id);
    }
}

export const promptService = new PromptService();
