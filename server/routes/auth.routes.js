const express = require("express");
const {
  registerUser,
  verifyUser,
  loginUser,
  changePassword,
  forgotPassword,
} = require("../controllers/auth.controller");

const router = express.Router();

router.post("/register", registerUser);

router.get("/confirmation/:token", verifyUser);

router.post("/login", loginUser);

router.post("/change-password", changePassword);

router.post("/forgot-password", forgotPassword);

module.exports = router;
