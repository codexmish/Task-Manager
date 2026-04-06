function isValidateEmail(email) {
  const emailRagex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRagex.test(email);
}

function isValidatePassword(password) {
  const passwordRagex = /^.{6,}$/;
  return passwordRagex.test(password);
}

const generateOTP = ()=>{
  
}

module.exports = { isValidateEmail, isValidatePassword };
