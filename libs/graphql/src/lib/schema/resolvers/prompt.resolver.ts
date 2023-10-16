import {promptService} from '@promptus/db';

export const promptResolver = {
    Query: {
        async getPrompt(_, { id }) {
            return await promptService.getPromptById(id);
        },
        async getAllPrompts() {
            return await promptService.getAllPrompts();
        }
    },
};