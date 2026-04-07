const OTPmailSend = require("../helpers/mailService");
const {
  isValidateEmail,
  isValidatePassword,
  generateOTP,
} = require("../helpers/utils");
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

    // Generate OTP
    const OTP_num = generateOTP();
    const OTP_exp_time = Date.now() + 3 * 60 * 1000;

    // user save on database
    const user = await authSchema({
      fullname,
      email,
      password,
      otp: OTP_num,
      otpExpiry: OTP_exp_time,
    });
    user.save();

    // sending otp with mail
    await OTPmailSend({
      email,
      subject: "otp verification mail",
      otp: OTP_num,
    });

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

// --------verifyOTP

const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  try {
    const user = await authSchema.findOneAndUpdate(
      {
        email,
        otp,
        otpExpiry: { $gt: Date.now() },
      },
      {
        isVerified: true,
        otp: null,
        otpExpiry: null,
      },
      {
        returnDocument: "after",
      },
    );

    if (!user)
      return res
        .status(400)
        .send({ success: false, message: "Invalid REquest" });
    res
      .status(200)
      .send({ success: true, message: "Email Verified successfully" });
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal Server Error" });
  }
};

const login = async () => {
  const { email, password } = req.body;

  try {
    const userData = await authSchema.findOne({ email });
    console.log(userData);

    if (!userData)
      return res
        .status(400)
        .send({ success: false, message: "invalid credientials" });

    if (!userData.isVerified)
      return res
        .status(400)
        .send({ success: false, message: "User is not verified" });

    // Load hash from your password DB.
    // bcrypt.compare(password, userData.password, function (err, result) {
    //   if (!result) return res.status(400).send("invalid credientials");
    //   console.log(result);
    // });

    const matchPassword =  await userData.comparePassword(password)
    console.log(matchPassword);
    
    res
      .status(200)
      .send({ success: true, message: "Login successfully", userData });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, message: "Server Error" });
  }
};

module.exports = { registration, verifyOTP, login };
