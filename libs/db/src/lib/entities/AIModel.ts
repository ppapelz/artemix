// src/models/AIModel.ts
import { Model, DataTypes, Sequelize } from "sequelize";

class AIModel extends Model {
    public ID!: number;
    public ModelType!: string;
    public AIConnectionToken!: string;
    public Temperature!: number;
    public MaxLength!: number;
    public Stop!: string;
    public PresencePenalty!: number;
    public FrequencyPenalty!: number;
    public PromptID!: number;
}

export const initializeAIModel = (sequelize: Sequelize) => {
    AIModel.init({
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        ModelType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        AIConnectionToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Temperature: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        MaxLength: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Stop: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        PresencePenalty: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        FrequencyPenalty: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        PromptID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: "ai_models",
        sequelize,
    });
}

export default AIModel;
