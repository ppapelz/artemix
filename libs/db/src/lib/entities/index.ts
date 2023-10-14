import { Sequelize } from "sequelize";
import Prompt, { initializePrompt } from "./Prompt";
import Variable, { initializeVariable } from "./Variable";
import AIModel, { initializeAIModel } from "./AIModel";

export const initializeModels = (sequelize: Sequelize) => {
    initializePrompt(sequelize);
    initializeVariable(sequelize);
    initializeAIModel(sequelize);

    Prompt.hasOne(AIModel, { foreignKey: "promptId", as: "AIModel" });
    AIModel.belongsTo(Prompt, { foreignKey: "promptId", as: "Prompt" });

    Prompt.hasMany(Variable, { foreignKey: "promptId", as: "Variables" });
    Variable.belongsTo(Prompt, { foreignKey: "promptId", as: "Prompt" });
}
