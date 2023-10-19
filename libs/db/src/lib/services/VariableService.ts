
import VariableRepository from '../repositories/VariableRepository';
import Variable from '../entities/Variable';

class VariableService {
    async createVariable(data: Variable["dataValues"]): Promise<Variable> {
        return await VariableRepository.create(data);
    }

    async getVariableById(id: number): Promise<Variable | null> {
        return await VariableRepository.findByID(id);
    }

    async getVariablesByPromptId(promptId: number): Promise<Variable[]> {
        return await VariableRepository.findByPromptID(promptId);
    }

    async updateVariable(id: number, data: Variable["dataValues"]): Promise<number> {
        return await VariableRepository.update(id, data);
    }

    async deleteVariable(id: number): Promise<number> {
        return await VariableRepository.delete(id);
    }
}

export const variableService = new VariableService();
