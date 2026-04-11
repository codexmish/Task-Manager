const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const authSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: false,
    default: "",
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  otp: {
    type: String,
    required: false,
  },
  otpExpiry: {
    type: Date,
  },
});

authSchema.pre("save", async function () {
  if (!this.isModified("password")) return;

  try {
    const round = 10;
    const salt = await bcrypt.genSalt(round);
    this.password = await bcrypt.hash(this.password, salt);
  } catch (error) {
    res.status(500).send({ success: false, message: "Internal server Error" });
  }
});

authSchema.methods.comparePassword = async function (plainPass) {
  return await bcrypt.compare(plainPass, this.password);
};

module.exports = mongoose.model("user", authSchema);
