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

const destroyFromCloudinary = async (url) => {
  try {
    const publcId = url.split("/").pop().split(".").shift();

    cloudinary.uploader.destroy(publcId);
  } catch (error) {
    console.log(error);
    throw new Error("cloudinary error");
  }
};

module.exports = { uploadCloudinary, destroyFromCloudinary };
