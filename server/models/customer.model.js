const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Customer = db.define("customer", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userRole: {
    type: DataTypes.STRING,
    defaultValue: "customer",
    allowNull: false,
    field: "user_role",
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "first_name",
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "last_name",
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  kilometersDriven: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "kilometers_driven",
  },
  confirmed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  blocked: {
    type: DataTypes.BOOLEAN,
    defaultValu: false,
  },
});

module.exports = Customer;
