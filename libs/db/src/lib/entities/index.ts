import { Sequelize } from "sequelize";
import Prompt, { initializePrompt } from "./Prompt";
import Variable, { initializeVariable } from "./Variable";
import AIModel, { initializeAIModel } from "./AIModel";

export const initializeModels = (sequelize: Sequelize) => {
    initializePrompt(sequelize);
    initializeVariable(sequelize);
    initializeAIModel(sequelize);

    Prompt.hasOne(AIModel, { foreignKey: "PromptID", as: "AIModel" });
    AIModel.belongsTo(Prompt, { foreignKey: "PromptID", as: "Prompt" });

    Prompt.hasMany(Variable, { foreignKey: "PromptID", as: "Variables" });
    Variable.belongsTo(Prompt, { foreignKey: "PromptID", as: "Prompt" });
}
