import { Model, DataTypes, Sequelize } from "sequelize";

class Prompt extends Model {
    public ID!: number;
    public Content!: string;
    public Name!: string;
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

export const initializePrompt = (sequelize: Sequelize) => {
    Prompt.init({
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        Content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
        Name: {
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
