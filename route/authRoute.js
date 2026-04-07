const express = require("express");
const { registration, verifyOTP, login } = require("../constrollers/authController");

const router = express.Router();

router.post("/registration", registration);
router.post("/verifyotp", verifyOTP);
router.post("/login", login);

module.exports = router;

// task_manager
