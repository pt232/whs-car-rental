const express = require("express");
const {
  getReservations,
  addReservation,
  updateReservationStatus,
} = require("../controllers/reservation.controller");

const router = express.Router();

router.get("/:token", getReservations);

router.post("/", addReservation);

router.patch("/:id", updateReservationStatus);

module.exports = router;
