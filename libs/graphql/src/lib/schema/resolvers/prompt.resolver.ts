import { promptService } from '@promptus/db';

export const promptResolver = {
    Query: {
        async getPrompt(_, { id }) {
            return await promptService.getPromptById(id);
        },
        async getAllPrompts() {
            console.log("getAllPrompts");
            return await promptService.getAllPrompts();
        },
    },
    Mutation: {
        async createPrompt(_, { input }) {
            return await promptService.createPrompt(input);
        },
        async updatePrompt(_, { id, input }) {
            return await promptService.updatePrompt(id, input);
        },
        async deletePrompt(_, { id }) {
            return await promptService.deletePrompt(id);
        }
    }
};