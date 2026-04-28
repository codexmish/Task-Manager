const { generateSlug } = require("../helpers/utils");
const authSchema = require("../models/authSchema");
const projectSchema = require("../models/projectSchema");

// - ------create project
const createProject = async (req, res) => {
  const { title, description } = req.body;

  try {
    const slug = generateSlug(title);
    const prfoject = await projectSchema({
      title,
      description,
      slug,
      author: req.user._id,
    });
    console.log(prfoject);

    prfoject.save();

    res.status(200).send({ success: true, message: "preject created" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

// --------project list

const projectList = async (req, res) => {
  try {
    const { search } = req.query;

    // ---finding proojects for user as a author or member
    const projects = await projectSchema
      .find({
        $or: [
          {
            author: req.user._id,
          },
          {
            members: req.user._id,
          },
        ],
        title: {
          $regex: search || "",
          $options: "i",
        },
      })
      .populate("author", "fullname avatar");

    if (!projects) {
      return res
        .status(400)
        .send({ success: false, message: "no projects found" });
    }
    res.status(200).send({ success: true, projects });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

// ----add member to project

const addTeamMemberToPtoject = async (req, res) => {
  const { email, projectId } = req.body;
  try {
    // ---checking if user  not exist
    const emailExist = await authSchema.findOne({ email });

    if (!emailExist)
      return res
        .status(400)
        .send({ success: false, message: "email not exist" });

    // checking if member alredy exist
    const memberExist = await projectSchema.findOne({
      $or: [
        {
          author: emailExist._id,
        },
        {
          members: emailExist._id,
        },
      ],
    });

    if (memberExist)
      return res
        .status(400)
        .send({ success: false, message: "member alredy exist" });

    // ---checking if project is exist and adding member to project
    const projectExist = await projectSchema.findOneAndUpdate(
      { _id: projectId },
      { members: emailExist._id },
      { returnDocument: "after" },
    );

    if (!projectExist)
      return res
        .status(400)
        .send({ success: false, message: "project not exist" });

    res.status(200).send({ success: true, message: "Team member added" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server error" });
  }
};

// add task to project
const addTaskToProject = async (req, res) => {
  const { title, description, priority, assignedTo, projectId } = req.body;
  try {
    if (!projectId)
      return res
        .status(400)
        .send({ success: false, message: "Project Not Found" });

    if (!title)
      return res
        .status(400)
        .send({ success: false, message: "Title is required" });
    if (!description)
      return res
        .status(400)
        .send({ success: false, message: "Description is required" });

    if (!priority)
      return res
        .status(400)
        .send({ success: false, message: "Priority is required" });

    if (!["mid", "low", "high"].includes(priority))
      return res
        .status(400)
        .send({ success: false, message: "Invalid Priority value" });

    const projectData = await projectSchema.findOneAndUpdate(
      { _id: projectId },
      { title, description, priority, assignedTo },
      { returnDocument: "after" },
    );

    if (!projectData)
      return res
        .status(400)
        .send({ success: false, message: "Project Not Found" });

        res
        .status(200)
        .send({ success: true, message: "Task added" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createProject, projectList, addTeamMemberToPtoject, addTaskToProject };
