require("dotenv").config();

const { Op } = require("sequelize");
const tables = require("../config/associations");
const transporter = require("../services/transporter");
const jwt = require("jsonwebtoken");

const getReservations = async (req, res) => {
  const { token } = req.params;

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    await tables.Reservation.update(
      { status: 3 },
      {
        where: {
          [Op.and]: [
            { status: 1 },
            {
              cancelableTo: {
                [Op.lt]:
                  new Date().toISOString().split("T")[0] +
                  " " +
                  new Date().toISOString().split("T")[1].split(".")[0],
              },
            },
          ],
        },
      }
    );

    const reservations = await tables.Reservation.findAll({
      where: {
        [Op.and]: [{ customerId: user.id }],
        [Op.or]: [{ status: 1 }, { status: 3 }, { status: 4 }],
      },
      include: [
        {
          model: tables.Car,
          attributes: { exclude: ["image"] },
          include: [
            {
              model: tables.CarType,
              as: "carType",
              include: [{ model: tables.CarClass, as: "carClass" }],
            },
            {
              model: tables.CarBrand,
              as: "carBrand",
            },
          ],
        },
        {
          model: tables.Customer,
          attributes: { exclude: ["password"] },
        },
        {
          model: tables.Partner,
        },
      ],
    });

    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getPartnerReservations = async (req, res) => {
  const { token } = req.params;

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const reservations = await tables.Reservation.findAll({
      where: {
        [Op.and]: [{ partnerId: user.id }, { status: 3 }],
      },
      include: [
        {
          model: tables.Car,
          attributes: { exclude: ["image"] },
          include: [
            {
              model: tables.CarType,
              as: "carType",
              include: [{ model: tables.CarClass, as: "carClass" }],
            },
            {
              model: tables.CarBrand,
              as: "carBrand",
            },
            {
              model: tables.Station,
              as: "rentalStation",
            },
          ],
        },
        {
          model: tables.Customer,
          attributes: { exclude: ["password"] },
        },
        {
          model: tables.Partner,
        },
      ],
    });

    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const getPartnerProtocolReservations = async (req, res) => {
  const { token } = req.params;

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    const reservations = await tables.Reservation.findAll({
      where: {
        [Op.and]: [{ partnerId: user.id }, { status: 4 }],
      },
      include: [
        {
          model: tables.Car,
          attributes: { exclude: ["image"] },
          include: [
            {
              model: tables.CarType,
              as: "carType",
              include: [{ model: tables.CarClass, as: "carClass" }],
            },
            {
              model: tables.CarBrand,
              as: "carBrand",
            },
            {
              model: tables.Station,
              as: "rentalStation",
            },
          ],
        },
        {
          model: tables.Customer,
          attributes: { exclude: ["password"] },
        },
        {
          model: tables.Partner,
        },
      ],
    });

    res.status(200).json({
      success: true,
      count: reservations.length,
      data: reservations,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error,
    });
  }
};

const addReservation = async (req, res) => {
  const {
    token,
    carId,
    partnerId,
    secondDriver,
    reservationFrom,
    reservationTo,
  } = req.body;

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const cancelableTo = new Date(
      Date.parse(reservationFrom) + 24 * 60 * 60 * 1000
    );

    await tables.Reservation.create({
      carId,
      customerId: user.id,
      partnerId,
      status: 1,
      driversFee: secondDriver,
      cancelableTo,
      reservationFrom,
      reservationTo,
    });

    await tables.Car.update({ available: false }, { where: { id: carId } });

    await transporter.sendMail({
      to: user.email,
      subject: "Bestätigung zu Ihrer Reservierung",
      html: "Hiermit bestätigen wir Ihre Reservierung. Diese können Sie noch in den nächsten 24 Stunden stornieren.",
    });

    res.status(200).json({
      success: true,
      data: "Wir haben Ihnen eine Bestätigungsmail zugesendet",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Es ist etwas schiefgelaufen 😞",
    });
  }
};

const updateReservationStatus = async (req, res) => {
  const { id } = req.params;
  const { newStatus, carId } = req.body;

  try {
    await tables.Reservation.update(
      { status: newStatus },
      { where: { id: id } }
    );

    if (newStatus === 2) {
      await tables.Car.update({ available: true }, { where: { id: carId } });
    }

    res.status(200).json({
      success: true,
      data: "Der Eintrag wurde erfolgreich aktualisiert",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      data: "Es ist etwas schiefgelaufen 😞",
    });
  }
};

module.exports = {
  getReservations,
  getPartnerReservations,
  getPartnerProtocolReservations,
  addReservation,
  updateReservationStatus,
};
