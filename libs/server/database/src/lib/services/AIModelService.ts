
import { AIModel } from '@promptus/server/models';
import AIModelRepository from '../repositories/AIModelRepository';

class AIModelService {
    async createAIModel(data: AIModel): Promise<AIModel> {
        return await AIModelRepository.create(data);
    }

    async getAIModelById(id: number): Promise<AIModel | null> {
        return await AIModelRepository.findById(id);
    }

    async getAIModelByPromptId(promptId: number): Promise<AIModel | null> {
        return await AIModelRepository.findByPromptID(promptId);
    }

    async updateAIModel(id: number, data: AIModel): Promise<void> {
        return await AIModelRepository.update(id, data);
    }

    async deleteAIModel(id: number): Promise<void> {
        return await AIModelRepository.delete(id);
    }

    async getAllAIModels(): Promise<AIModel[]> {
        return await AIModelRepository.findAll();
    }
}

export const aiModelService = new AIModelService();
