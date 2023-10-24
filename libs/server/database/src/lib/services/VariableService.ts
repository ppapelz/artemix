
import { Variable } from '@promptus/server/models';
import VariableRepository from '../repositories/VariableRepository';

class VariableService {
    async createVariable(data: Variable): Promise<Variable> {
        return await VariableRepository.create(data);
    }

    async getVariableById(id: number): Promise<Variable | null> {
        console.log('VariableService.getVariableById', id);
        return await VariableRepository.findById(id);
    }

    async getVariablesByPromptId(promptId: number): Promise<Variable[]> {
        return await VariableRepository.findByPromptID(promptId);
    }

    async updateVariable(id: number, data: Variable): Promise<void> {
        return await VariableRepository.update(id, data);
    }

    async deleteVariable(id: number): Promise<void> {
        return await VariableRepository.delete(id);
    }
}

export const variableService = new VariableService();
