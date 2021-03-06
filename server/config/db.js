require("dotenv").config();

const Sequelize = require("sequelize");

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;

const db = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  timezone: "+02:00",
});

db.authenticate()
  .then(() => {
    console.log("Successfully connected to the database! 🎉");
  })
  .catch((error) => {
    console.log("An error occured while connection to the database! ❌", error);
  });

module.exports = db;
