const tables = require("../config/associations");

const getCars = (req, res) => {
  tables.Car.findAll({
    include: [{ model: tables.Partner }],
  }).then((cars) => {
    res.json(cars);
  });
};

module.exports = {
  getCars,
};
