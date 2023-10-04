// src/repositories/AIModelRepository.ts

import { BaseRepository } from "./BaseRepository";
import AIModel from "../entities/AIModel";

class AIModelRepository extends BaseRepository<AIModel> {
    constructor() {
        super(AIModel);
    }

    async findByPromptID(promptID: number): Promise<AIModel | null> {
        return await this.model.findOne({ where: { PromptID: promptID } });
    }
}

export default new AIModelRepository();
