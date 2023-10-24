
import { CreateVariableInput, UpdateVariableInput, Variable } from '@promptus/server/models';
import VariableRepository from '../repositories/VariableRepository';

class VariableService {
    async createVariable(data: CreateVariableInput): Promise<Variable> {
        return await VariableRepository.create(data);
    }

    async getVariableById(id: number): Promise<Variable | null> {
        return await VariableRepository.findById(id);
    }

    async getVariablesByPromptId(promptId: number): Promise<Variable[]> {
        return await VariableRepository.findByPromptID(promptId);
    }

    async updateVariable(id: number, data: UpdateVariableInput): Promise<number> {
        return await VariableRepository.update(id, data);
    }

    async deleteVariable(id: number): Promise<boolean> {
        return await VariableRepository.delete(id);
    }
}

export const variableService = new VariableService();
