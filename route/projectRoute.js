const express = require("express");
const { createProject } = require("../constrollers/taskController");
const router = express.Router();

router.post("/create", createProject)

module.exports = router