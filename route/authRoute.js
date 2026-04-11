const express = require("express");
const { registration, verifyOTP, login, userProfile } = require("../constrollers/authController");
const { authmiddleware } = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/registration", registration);
router.post("/verifyotp", verifyOTP);
router.post("/login", login);
router.post("/userProfile", authmiddleware, userProfile)

module.exports = router;

// task_manager
