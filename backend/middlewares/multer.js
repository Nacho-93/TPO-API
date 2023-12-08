const multer = require('multer');
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const { v4: uuidv4 } = require('uuid');

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images_professors', // Opcional: nombre de la carpeta en Cloudinary
    format: async (req, file) => 'png', // Opcional: formato del archivo
    public_id: (req, file) => `image_profile_${uuidv4()}`, // Opcional: nombre del archivo
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
