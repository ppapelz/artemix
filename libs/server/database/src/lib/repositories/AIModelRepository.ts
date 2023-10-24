import { BaseRepository } from './BaseRepository';
import { AIModel } from '@promptus/server/models';

class AIModelRepository extends BaseRepository<AIModel> {
    constructor() {
        super(AIModel);
    }

    async findByPromptID(promptId: number): Promise<AIModel | null> {
        return await this.repository.findOne({ where: { promptId: promptId } });
    }
}
export default new AIModelRepository();
