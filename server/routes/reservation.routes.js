const express = require("express");
const {
  getReservations,
  addReservation,
  updateReservationStatus,
  getPartnerReservations,
} = require("../controllers/reservation.controller");

const router = express.Router();

router.get("/:token", getReservations);

router.get("/partner/:token", getPartnerReservations);

router.post("/", addReservation);

router.patch("/:id", updateReservationStatus);

module.exports = router;
