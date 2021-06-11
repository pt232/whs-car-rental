const express = require("express");
const getStations = require("../controllers/station.controllers");

const router = express.Router();

router.get("/", getStations);

module.exports = router;
