require("dotenv").config();

const jwt = require("jsonwebtoken");
const tables = require("../config/associations");
const { getPriceInformation } = require("../utils/helpers");

const getCars = async (req, res) => {
  try {
    const cars = await tables.Car.findAll({
      where: { available: true },
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
    const { id, token } = req.params;
    const { customerId, fee } = req.query;

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

    let customer;

    try {
      const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

      if (user.role === "customer") {
        customer = await tables.Customer.findOne({
          where: { id: user.id },
        });
      } else if (user.role === "partner") {
        if (customerId) {
          customer = await tables.Customer.findOne({
            where: { id: customerId },
          });
        }
      }
    } catch (error) {}

    const { price, priceList, priceListTotal, discount, driversFee } =
      getPriceInformation(car, customer, fee);

    res.status(200).json({
      success: true,
      price,
      priceList,
      priceListTotal,
      discount,
      driversFee,
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
