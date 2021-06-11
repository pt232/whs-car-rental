const express = require("express");
const {
  registerUser,
  verifyUser,
  loginUser,
  changePassword,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", registerUser);

router.get("/confirmation/:token", verifyUser);

router.post("/login", loginUser);

router.post("/change-password", changePassword);

module.exports = router;
