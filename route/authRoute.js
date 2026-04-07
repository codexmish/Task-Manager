const express = require("express");
const { registration, verifyOTP } = require("../constrollers/authController");

const router = express.Router();

router.post("/registration", registration);
router.post("/verifyotp", verifyOTP);

module.exports = router;

// task_manager
