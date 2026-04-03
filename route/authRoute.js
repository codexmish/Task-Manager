const express = require("express");
const { registration } = require("../constrollers/authController");

const router = express.Router();

router.post("/registration", registration);

module.exports = router;

// task_manager
