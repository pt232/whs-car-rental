const express = require("express");
const { getCars, getCar } = require("../controllers/car.controller");

const router = express.Router();

router.get("/", getCars);

router.get("/:id", getCar);

module.exports = router;
