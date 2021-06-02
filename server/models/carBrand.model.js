const { DataTypes } = require("sequelize");
const db = require("../config/db");

const CarBrand = db.define("car_brand", {
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

module.exports = CarBrand;
