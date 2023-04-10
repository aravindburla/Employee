import { sequelize } from "../database.js";
import { DataTypes, Model } from "sequelize";
import Employee from "./Employee.js";

class Contact extends Model {}

Contact.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.BIGINT,
    },

    phone: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    modelName: "contact",
    timestamps: true,
    sequelize,
    freezeTableName: false,
    paranoid: true,
  }
);

Employee.hasMany(Contact);
Contact.belongsTo(Employee);

export default Contact;
