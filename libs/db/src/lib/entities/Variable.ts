// src/models/Variable.ts
import { Model, DataTypes, Sequelize } from "sequelize";

class Variable extends Model {
    public ID!: number;
    public PromptID!: number;
    public Label!: string;
    public Type!: string; // Burada belirli tipleri enum olarak da tanımlayabilirsiniz
    public Name!: string;
    public Description?: string;
    public DefaultValue?: string;
    public ContentLimit?: number;
}

export const initializeVariable = (sequelize: Sequelize) => {
    Variable.init({
        ID: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        PromptID: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Label: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        DefaultValue: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        ContentLimit: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        tableName: "variables",
        sequelize,
    });
}

export default Variable;
