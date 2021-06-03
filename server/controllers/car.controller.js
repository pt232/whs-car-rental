const tables = require("../config/associations");

const getCars = async (req, res) => {
  try {
    const cars = await tables.Car.findAll({
      include: [
        {
          model: tables.CarBrand,
        },
        {
          model: tables.CarType,
          include: [{ model: tables.CarClass }],
        },
        {
          model: tables.Partner,
        },
        {
          model: tables.Station,
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
      error: {
        name: error.name,
        code: error.parent.code,
        message: error.parent.sqlMessage,
      },
    });
  }
};

module.exports = {
  getCars,
};
