import { Model, DataTypes, Sequelize } from "sequelize";

export class Prompt extends Model {
    public id!: number;
    public content!: string;
    public name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const initializePrompt = (sequelize: Sequelize) => {
    Prompt.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false
        }
    }, {
        tableName: "Prompts",
        sequelize,
    });
}

export default Prompt;
