const express = require("express");
const {
  createProject,
  projectList,
  addTeamMemberToPtoject,
  addTaskToProject,
} = require("../constrollers/taskController");
const router = express.Router();

router.post("/create", createProject);
router.get("/list", projectList);
router.post("/addmember", addTeamMemberToPtoject)
router.post("/addTask", addTaskToProject)

module.exports = router;
