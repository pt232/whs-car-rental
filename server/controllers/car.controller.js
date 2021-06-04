const tables = require("../config/associations");

const getCars = async (req, res) => {
  try {
    const cars = await tables.Car.findAll({
      include: [
        {
          model: tables.CarBrand,
          as: "carBrand",
        },
        {
          model: tables.CarType,
          as: "carType",
          include: [{ model: tables.CarClass, as: "carClass" }],
        },
        {
          model: tables.Partner,
        },
        {
          model: tables.Station,
          as: "rentalStation",
        },
      ],
    });

    res.status(200).json({
      success: true,
      count: cars.length,
      data: cars,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

module.exports = {
  getCars,
};
