import { BaseRepository } from './BaseRepository';
import { Variable } from '@artemix/server/models';

class VariableRepository extends BaseRepository<Variable> {
    constructor() {
        super(Variable);
    }

    async findByPromptID(promptId: number): Promise<Variable[] | null> {
        return await this.repository.find({ where: { promptId: promptId } });
    }
}
export default new VariableRepository();
