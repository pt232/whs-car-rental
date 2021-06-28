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
  partnerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "partner_id",
  },
  status: {
    type: DataTypes.ENUM,
    values: ["pending", "accepted", "canceled", "back"],
    allowNull: false,
  },
  cancelableTo: {
    type: "TIMESTAMP",
    allowNull: false,
    field: "cancelable_to",
  },
  reservationFrom: {
    type: "TIMESTAMP",
    allowNull: false,
    field: "reservation_from",
  },
  reservationTo: {
    type: "TIMESTAMP",
    allowNull: false,
    field: "reservation_to",
  },
  contract: {
    type: DataTypes.BLOB("long"),
    allowNull: true,
  },
  backProtocol: {
    type: DataTypes.BLOB("long"),
    allowNull: true,
    field: "back_protocol",
  },
});

module.exports = Reservation;
