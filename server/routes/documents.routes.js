const express = require("express");
const { createContract } = require("../controllers/documents.controller");

const router = express.Router();

router.post("/contract", createContract);

module.exports = router;
