const Car = require("../models/car.model");
const CarBrand = require("../models/carBrand.model");
const CarType = require("../models/carType.model");
const CarClass = require("../models/carClass.mode");
const Partner = require("../models/partner.model");
const Station = require("../models/station.model");
const Customer = require("../models/customer.model");
const Reservation = require("../models/reservation.model");

const tables = {
  Car,
  CarBrand,
  CarType,
  CarClass,
  Partner,
  Station,
  Customer,
  Reservation,
};

tables.Car.hasOne(tables.CarBrand, {
  as: "carBrand",
  foreignKey: "id",
  sourceKey: "brandId",
});
tables.Car.hasOne(tables.CarType, {
  as: "carType",
  foreignKey: "id",
  sourceKey: "typeId",
});
tables.Car.hasOne(tables.Partner, {
  foreignKey: "id",
  sourceKey: "partnerId",
});
tables.Car.hasOne(tables.Station, {
  as: "rentalStation",
  foreignKey: "id",
  sourceKey: "stationId",
});

tables.CarType.hasOne(tables.CarClass, {
  as: "carClass",
  foreignKey: "id",
  sourceKey: "classId",
});

tables.Reservation.hasOne(tables.Car, {
  foreignKey: "id",
  sourceKey: "carId",
});
tables.Reservation.hasOne(tables.Customer, {
  foreignKey: "id",
  sourceKey: "customerId",
});
tables.Reservation.hasOne(tables.Partner, {
  foreignKey: "id",
  sourceKey: "partnerId",
});

module.exports = tables;
