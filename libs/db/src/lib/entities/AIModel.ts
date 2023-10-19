import { Model, DataTypes, Sequelize } from "sequelize";

class AIModel extends Model {
    public id!: number;
    public modelType!: string;
    public aiConnectionToken!: string;
    public temperature!: number;
    public maxLength!: number;
    public stop!: string;
    public presencePenalty!: number;
    public frequencyPenalty!: number;
    public promptId!: number;
}

export const initializeAIModel = (sequelize: Sequelize) => {
    AIModel.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        modelType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        aiConnectionToken: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        temperature: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        maxLength: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        stop: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        presencePenalty: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        frequencyPenalty: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        promptId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: "AIModels",
        sequelize,
    });
}

export default AIModel;
