if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const tables = require("../config/associations");
const transporter = require("../services/transporter");
const jwt = require("jsonwebtoken");

const addReservation = async (req, res) => {
  const { token, carId } = req.body;
  const tomorrow = new Date(Date.now() + 24 * 60 * 60 * 1000);

  try {
    const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    await tables.Reservation.create({
      carId,
      customerId: user.id,
      status: 1,
      cancelableTo: tomorrow,
    });

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
    console.log(error);

    res.status(500).json({
      success: false,
      data: "Es ist etwas schiefgelaufen 😞",
    });
  }
};

module.exports = { addReservation };
