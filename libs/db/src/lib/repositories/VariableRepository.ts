import { BaseRepository } from "./BaseRepository";
import Variable from "../entities/Variable";

class VariableRepository extends BaseRepository<Variable> {
    constructor() {
        super(Variable);
    }

    async findByPromptID(promptID: number): Promise<Variable[]> {
        return await this.model.findAll({ where: { promptID: promptID } });
    }
}

export default new VariableRepository();