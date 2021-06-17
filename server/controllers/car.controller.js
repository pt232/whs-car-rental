const tables = require("../config/associations");
const { getPriceInformation } = require("../utils/helpers");

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

const getCar = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await tables.Car.findOne({
      where: { id: id },
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
      data: car,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getCarPrice = async (req, res) => {
  try {
    const { id } = req.params;

    const car = await tables.Car.findOne({
      where: { id: id },
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

    const { price, priceList } = getPriceInformation(car);

    res.status(200).json({
      success: true,
      price,
      priceList,
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
  getCar,
  getCarPrice,
};
