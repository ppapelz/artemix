import { variableService } from '@promptus/db';

export const variableResolver = {
    Query: {
        async getVariable(_, { id }) {
            return await variableService.getVariableById(id);
        },
        async getVariablesByPromptId(_, { promptId }) {
            return await variableService.getVariablesByPromptId(promptId);
        }
    },
    Mutation: {
        async createVariable(_, { input }) {
            return await variableService.createVariable(input);
        },
        async updateVariable(_, { id, input }) {
            return await variableService.updateVariable(id, input);
        },
        async deleteVariable(_, { id }) {
            return await variableService.deleteVariable(id);
        }
    }
};
