const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
//allows to read the cloudinary files:
const multer = require('multer');

cloudinary.config({
  cloud_name: 'dihhorbtt',
  api_key: '135775913667232',
  api_secret: '0OJ7xCmY1jryT-rHToYqNnXsQyk'
});

const storage = new CloudinaryStorage({
  cloudinary,
  folder: 'Mealplannr', // The name of the folder in cloudinary
  allowedFormats: ['jpg', 'png', 'jpeg'],
  // params: { resource_type: 'raw' }, => this is in case you want to upload other type of files, not just images
  filename: function (req, res, cb) {
    cb(null, res.originalname); // The file on cloudinary would have the same name as the original file name
  }
});

module.exports = multer({ storage });