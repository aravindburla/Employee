import { sequelize } from "../database.js";
import { DataTypes, Model } from 'sequelize';
import Book from "./Book.js";

class User extends Model{}

User.init(
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

        phone: {
            allowNull: false,
            type: DataTypes.STRING
        },

    },
    {
        modelName: "user",
        timestamps:true,
        sequelize,
        freezeTableName: false,
        paranoid: true
    }
);

User.hasMany(Book)
Book.belongsTo(User)

export default User;