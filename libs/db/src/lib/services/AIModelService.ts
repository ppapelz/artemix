
import AIModelRepository from '../repositories/AIModelRepository';
import AIModel from '../entities/AIModel';

class AIModelService {
    async createModel(data: AIModel["dataValues"]): Promise<AIModel> {
        return await AIModelRepository.create(data);
    }

    async getModelById(id: number): Promise<AIModel | null> {
        return await AIModelRepository.findByID(id);
    }

    async getModelByPromptId(promptId: number): Promise<AIModel | null> {
        return await AIModelRepository.findByPromptID(promptId);
    }

    async updateModel(id: number, data: AIModel["dataValues"]): Promise<number> {
        return await AIModelRepository.update(id, data);
    }

    async deleteModel(id: number): Promise<number> {
        return await AIModelRepository.delete(id);
    }
}

export const aiModelService = new AIModelService();
