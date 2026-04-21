const projectSchema = require("../models/projectSchema");

// - ------create project
const createProject = async (req, res) => {
  const { title, description } = req.body;

  try {
    const prfoject = await projectSchema({
      title,
      description,
      author: req.user._id,
    });
    console.log(prfoject);

    prfoject.save();

    res.status(200).send({ success: true, message: "preject created" });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createProject };
