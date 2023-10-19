import { aiModelService } from '@promptus/db';

export const aiModelResolver = {
    Query: {
        async getAIModel(_, { id }) {
            return await aiModelService.getAIModelById(id);
        },
        async getAllAIModels() {
            return await aiModelService.getAllAIModels();
        }
    },
    Mutation: {
        async createAIModel(_, { input }) {
            return await aiModelService.createAIModel(input);
        },
        async updateAIModel(_, { id, input }) {
            return await aiModelService.updateAIModel(id, input);
        },
        async deleteAIModel(_, { id }) {
            return await aiModelService.deleteAIModel(id);
        }
    }
};
