import { BaseRepository } from "./BaseRepository";
import Prompt from "../entities/Prompt";

class PromptRepository extends BaseRepository<Prompt> {
    constructor() {
        super(Prompt);
    }
}

export default new PromptRepository();