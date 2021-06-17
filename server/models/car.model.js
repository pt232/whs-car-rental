const { DataTypes, Sequelize } = require("sequelize");
const db = require("../config/db");

const Car = db.define("car", {
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
  brandId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "brand_id",
  },
  typeId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "type_id",
  },
  image: {
    type: DataTypes.BLOB("long"),
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  partnerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "partner_id",
  },
  stationId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "station_id",
  },
  availableFrom: {
    type: "TIMESTAMP",
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    allowNull: false,
    field: "available_from",
  },
  availableTo: {
    type: "TIMESTAMP",
    defaultValue: "2038-01-01 00:00:00",
    allowNull: false,
    field: "available_to",
  },
});

module.exports = Car;
