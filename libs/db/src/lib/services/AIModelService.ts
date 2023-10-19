
import AIModelRepository from '../repositories/AIModelRepository';
import AIModel from '../entities/AIModel';

class AIModelService {
    async createAIModel(data: AIModel["dataValues"]): Promise<AIModel> {
        return await AIModelRepository.create(data);
    }

    async getAIModelById(id: number): Promise<AIModel | null> {
        return await AIModelRepository.findByID(id);
    }

    async getAIModelByPromptId(promptId: number): Promise<AIModel | null> {
        return await AIModelRepository.findByPromptID(promptId);
    }

    async updateAIModel(id: number, data: AIModel["dataValues"]): Promise<number> {
        return await AIModelRepository.update(id, data);
    }

    async deleteAIModel(id: number): Promise<number> {
        return await AIModelRepository.delete(id);
    }

    async getAllAIModels(): Promise<AIModel[]> {
        return await AIModelRepository.findAll();
    }
}

export const aiModelService = new AIModelService();
