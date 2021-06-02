const tables = require("../config/associations");

const getCars = (req, res) => {
  tables.Car.findAll().then(() => {
    console.log("Test");
  });
  res.send("Hello World");
};

module.exports = {
  getCars,
};
