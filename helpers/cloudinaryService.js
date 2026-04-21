const cloudinary = require('cloudinary').v2;

const uploadCloudinary = ({ mimetype, imageBuffer }) => {
  const dataUrl = `data:${mimetype};base64,${imageBuffer.toString("base64")}`;
//   console.log(dataUrl);

  cloudinary.uploader.upload(dataUrl, (error, result) => {
    // console.log(result, error);
    if (error) {
        console.log(error);
        
      throw Error("cloudinary error");
    }
    return result.secure_url;
  });
};

module.exports = { uploadCloudinary };
