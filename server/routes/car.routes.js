const express = require("express");
const {
  getCars,
  getCar,
  getCarPrice,
} = require("../controllers/car.controller");

const router = express.Router();

router.get("/", getCars);

router.get("/:id", getCar);

router.get("/price/:id/:token", getCarPrice);

module.exports = router;
