const crypto = require('crypto');

function isValidateEmail(email) {
  const emailRagex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRagex.test(email);
}

function isValidatePassword(password) {
  const passwordRagex = /^.{6,}$/;
  return passwordRagex.test(password);
}

const generateOTP = ()=>{
  return crypto.randomInt(1000, 10000).toString();
}

module.exports = { isValidateEmail, isValidatePassword, generateOTP };
