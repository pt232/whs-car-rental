const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Car = db.define(
  "car",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.BLOB,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Car;
