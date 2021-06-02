const { DataTypes } = require("sequelize");
const db = require("../config/db");

const CarClass = db.define("car_class", {
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
});

module.exports = CarClass;
