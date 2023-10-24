import { Model, DataTypes, Sequelize } from "sequelize";

class Variable extends Model {
    public id!: number;
    public promptId!: number;
    public label!: string;
    public type!: string; 
    public name!: string;
    public description?: string;
    public defaultValue?: string;
    public contentLimit?: number;
}

export const initializeVariable = (sequelize: Sequelize) => {
    Variable.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        promptId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        label: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        defaultValue: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        contentLimit: {
            type: DataTypes.INTEGER,
            allowNull: true,
        }
    }, {
        tableName: "variables",
        sequelize,
    });
}

export default Variable;
