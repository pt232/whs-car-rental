const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Station = db.define("rental_station", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Station;
