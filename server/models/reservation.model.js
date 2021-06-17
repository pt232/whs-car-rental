const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Reservation = db.define("reservation", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  carId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "car_id",
  },
  customerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "customer_id",
  },
  status: {
    type: DataTypes.ENUM,
    values: ["pending", "accepted", "canceled"],
    allowNull: false,
  },
  cancelableTo: {
    type: "TIMESTAMP",
    allowNull: true,
    field: "cancelable_to",
  },
});

module.exports = Reservation;
