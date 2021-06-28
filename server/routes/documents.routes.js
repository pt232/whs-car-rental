const express = require("express");
const {
  createContract,
  createProtocol,
} = require("../controllers/documents.controller");

const router = express.Router();

router.post("/contract", createContract);

router.post("/protocol", createProtocol);

module.exports = router;
