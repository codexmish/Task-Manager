const express = require("express");
const { registration } = require("../constrollers/authController");

const router = express.Router();

router.get("/registration", registration);

module.exports = router;

// task_manager
