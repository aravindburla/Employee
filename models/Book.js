import { sequelize } from "../database.js";
import { DataTypes, Model } from 'sequelize';

class Book extends Model{}

Book.init(
    {

        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT
        },

        title: {
            allowNull: false,
            type: DataTypes.STRING,
        },

        like: {
            allowNull: true,
            type: DataTypes.INTEGER,
            defaultValue:0

        },
        dislike: {
            allowNull: true,
            type: DataTypes.INTEGER,
            defaultValue:0
        },

    },
    {
        modelName: "book",
        timestamps:true,
        sequelize,
        freezeTableName: false,
        paranoid: true
    }
);

export default Book;