const express = require("express");
const {
  createProject,
  projectList,
} = require("../constrollers/taskController");
const router = express.Router();

router.post("/create", createProject);
router.get("/list", projectList);

module.exports = router;
