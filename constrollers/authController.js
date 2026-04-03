const { isValidateEmail, isValidatePassword } = require("../helpers/utils");

const registration = async (req, res) => {
  const { fillname, email, password } = req.body;
  try {
    // check if email is exist in db
    const existingUser = await userSchema.findOne({ email });
    if (existingUser)
      return res
        .status(400)
        .send({ success: false, message: "email already exist" });

    // Validation
    // name
    if (!fillname) return res.status(400).send("Name is required");

    // email validation
    if (!email) return res.status(400).send("email is required");
    if (!isValidateEmail(email)) return res.status(400).send("email not valid");

    // password validation
    if (!password) return res.status(400).send("password is required");
    if (!isValidatePassword(password))
      return res.status(400).send("password not valid");



  } catch (error) {}
};

module.exports = { registration };
