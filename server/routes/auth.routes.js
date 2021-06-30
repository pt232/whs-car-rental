const express = require("express");
const {
  registerUser,
  verifyUser,
  loginUser,
  changePassword,
  forgotPassword,
  getUsername,
} = require("../controllers/auth.controller");

const router = express.Router();

router.get("/name/:token", getUsername);

router.get("/confirmation/:token", verifyUser);

router.post("/register", registerUser);

router.post("/login", loginUser);

router.post("/change-password", changePassword);

router.post("/forgot-password", forgotPassword);

module.exports = router;
