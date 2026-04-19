const express = require("express");
const {
  registration,
  verifyOTP,
  login,
  userProfile,
  updateProfile,
} = require("../constrollers/authController");
const { authmiddleware } = require("../middleware/authmiddleware");
const multer = require("multer");
const upload = multer();

const router = express.Router();

router.post("/registration", registration);
router.post("/verifyotp", verifyOTP);
router.post("/login", login);
router.post("/userProfile", authmiddleware, userProfile);
router.put(
  "/update-profile",
  authmiddleware,
  upload.single("avatar"),
  updateProfile,
);

module.exports = router;

