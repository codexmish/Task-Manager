const cloudinary = require("cloudinary").v2;

const uploadCloudinary = async ({ mimetype, imageBuffer }) => {
  const dataUrl = `data:${mimetype};base64,${imageBuffer.toString("base64")}`;

  try {
    const result = await cloudinary.uploader.upload(dataUrl);
    return result.secure_url;
  } catch (error) {
    console.log(error);
    throw new Error("cloudinary error");
  }
};

module.exports = { uploadCloudinary };
