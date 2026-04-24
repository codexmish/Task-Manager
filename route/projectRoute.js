const express = require("express");
const {
  createProject,
  projectList,
  addTeamMemberToPtoject,
} = require("../constrollers/taskController");
const router = express.Router();

router.post("/create", createProject);
router.get("/list", projectList);
router.post("/addmember", addTeamMemberToPtoject)

module.exports = router;
