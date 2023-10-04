
import PromptRepository from '../repositories/PromptRepository';
import Prompt from '../entities/Prompt';

class PromptService {
    async createPrompt(data: Prompt["dataValues"]): Promise<Prompt> {
        return await PromptRepository.create(data);
    }

    async getPromptById(id: number): Promise<Prompt | null> {
        return await PromptRepository.findByID(id);
    }

    async getAllPrompts(): Promise<Prompt[]> {
        return await PromptRepository.findAll();
    }

    async updatePrompt(id: number, data: Prompt["dataValues"]): Promise<number> {
        return await PromptRepository.update(id, data);
    }

    async deletePrompt(id: number): Promise<number> {
        return await PromptRepository.delete(id);
    }
}

export const promptService = new PromptService();
