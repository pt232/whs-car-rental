const express = require("express");
const { addReservation } = require("../controllers/reservation.controller");

const router = express.Router();

router.post("/", addReservation);

module.exports = router;
