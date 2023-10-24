import { BaseRepository } from './BaseRepository';
import { Prompt } from '@promptus/server/models';

class PromptRepository extends BaseRepository<Prompt> {
    constructor() {
        super(Prompt);
    }
}
export default new PromptRepository();
