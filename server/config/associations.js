const Car = require("../models/car.model");
const CarBrand = require("../models/carBrand.model");
const CarType = require("../models/carType.model");
const CarClass = require("../models/carClass.mode");
const Partner = require("../models/partner.model");
const Station = require("../models/station.model");

const tables = {
  Car,
  CarBrand,
  CarType,
  CarClass,
  Partner,
  Station,
};

tables.Car.hasOne(tables.CarBrand, { foreignKey: "id" });
tables.Car.hasOne(tables.CarType, { foreignKey: "id" });
tables.Car.hasOne(tables.Partner, { foreignKey: "id" });
tables.Car.hasOne(tables.Station, { foreignKey: "id" });
tables.CarType.hasOne(tables.CarClass, { foreignKey: "id" });

module.exports = tables;
