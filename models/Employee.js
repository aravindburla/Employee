import { sequelize } from "../database.js";
import { DataTypes, Model } from 'sequelize';
import Contact from "./Contact.js";

class Employee extends Model{}

Employee.init(
    {

        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },

        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },

        email: {
            allowNull: false,
            type: DataTypes.STRING
        },

        password: {
            allowNull: false,
            type: DataTypes.STRING
        },

    },
    {
        modelName: "employee",
        timestamps:true,
        sequelize,
        freezeTableName: false,
        paranoid: true
    }
);



export default Employee;