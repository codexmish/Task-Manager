const { isValidateEmail, isValidatePassword } = require("../helpers/utils");
const authSchema = require("../models/authSchema");

const registration = async (req, res) => {
  const { fullname, email, password } = req.body;
  try {
    // check if email is exist in db
    const existingUser = await authSchema.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .send({ success: false, message: "email already exist" });

    // Validation
    // name
    if (!fullname?.trim()) return res.status(400).send("Name is required");

    // email validation
    if (!email) return res.status(400).send("email is required");
    if (!isValidateEmail(email)) return res.status(400).send("email not valid");

    // password validation
    if (!password) return res.status(400).send("password is required");
    if (!isValidatePassword(password))
      return res.status(400).send("password not valid");

    // user save on database
    const user = await authSchema({ fullname, email, password });
    user.save();
    res.status(200).send({
      success: true,
      message: "Register successfull Please verify your email",
      fullname,
      email,
      password,
    });
  } catch (error) {
    console.log(error);
    
    res.status(500).send({ success: false, message: "Internal server Error" });
  }
};

module.exports = { registration };
