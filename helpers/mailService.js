require("dotenv").config();
const nodemailer = require("nodemailer");

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
   

  service: "gmail",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.APP_USER,
    pass: process.env.APP_PASS,
  },
});

const OTPmailSend = async ({ email, subject, otp }) => {
  try {
    await transporter.sendMail({
      from: '"Taskmanager" <team@example.com>', // sender address
      to: email, // list of recipients
      subject: subject, // subject line
      html: `<b>verify email otp: ${otp}</b>`, // HTML body
    });
  } catch (error) {
    console.log("Error while sending mail", error);
  }
};

module.exports = OTPmailSend;
