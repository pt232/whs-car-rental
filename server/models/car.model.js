const { DataTypes } = require("sequelize");
const db = require("../config/db");
const CarBrand = require("./carBrand.model");
const CarType = require("./carType.model");
const Partner = require("./partner.model");
const Station = require("./station.model");

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
    type: DataTypes.BLOB,
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
});

module.exports = Car;