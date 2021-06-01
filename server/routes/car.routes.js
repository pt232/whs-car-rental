const express = require("express");
const { getCars } = require("../controllers/car.controller");

const router = express.Router();

router.get("/", getCars);

module.exports = router;
