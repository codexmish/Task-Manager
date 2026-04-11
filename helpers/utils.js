const crypto = require("crypto");
const jwt = require("jsonwebtoken");
require("dotenv").config();

function isValidateEmail(email) {
  const emailRagex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRagex.test(email);
}

function isValidatePassword(password) {
  const passwordRagex = /^.{6,}$/;
  return passwordRagex.test(password);
}

const generateOTP = () => {
  return crypto.randomInt(1000, 10000).toString();
};

const generateAccessToken = (user) => {
  const token = jwt.sign(user, process.env.JWT_SEC);
  return token;
};

module.exports = {
  isValidateEmail,
  isValidatePassword,
  generateOTP,
  generateAccessToken,
};
