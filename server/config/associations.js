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

tables.CarBrand.belongsTo(tables.Car);
tables.Car.hasOne(tables.CarBrand);
tables.CarType.belongsTo(tables.Car);
tables.Car.hasOne(tables.CarType);
tables.Partner.belongsTo(tables.Car);
tables.Car.hasOne(tables.Partner);
tables.Station.belongsTo(tables.Car);
tables.Car.hasOne(tables.Station);
tables.CarClass.belongsTo(tables.CarType);
tables.CarType.hasOne(tables.CarClass);

module.exports = tables;
