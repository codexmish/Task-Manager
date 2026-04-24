const { generateSlug } = require("../helpers/utils");
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

    const projects = await projectSchema.find({ author: req.user._id, title: {
      $regex: search, $options: "i"
    } });

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
module.exports = { createProject, projectList };
