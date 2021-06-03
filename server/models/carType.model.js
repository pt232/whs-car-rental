const { DataTypes } = require("sequelize");
const db = require("../config/db");
const CarClass = require("./carClass.mode");

const CarType = db.define("car_type", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  classId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "class_id",
  },
  doors: {
    type: DataTypes.ENUM,
    values: ["2", "4"],
  },
  seats: {
    type: DataTypes.ENUM,
    values: ["2-3", "4-5", "6-7", "8-9"],
  },
  navigation: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  airConditioner: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "air_conditioner",
  },
  automatic: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  winterTires: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "winter_tires",
  },
  insurance: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  freeKilometers: {
    type: DataTypes.ENUM,
    values: ["750", "1500"],
    field: "free_kilometers",
  },
  protection: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  twoDrivers: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    field: "two_drivers",
  },
});

module.exports = CarType;
