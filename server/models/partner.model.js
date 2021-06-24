const { DataTypes } = require("sequelize");
const db = require("../config/db");

const Partner = db.define("partner", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  userRole: {
    type: DataTypes.STRING,
    defaultValue: "partner",
    allowNull: false,
    field: "user_role",
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  image: {
    type: DataTypes.BLOB("long"),
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Partner;
