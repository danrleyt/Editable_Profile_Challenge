const multer = require('multer');
const crypto = require('crypto');
const path = require('path');

const storage = multer.diskStorage({
  destination: './src/api/storage',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err);
      cb(null, raw.toString('hex') + path.extname(file.originalname));
    })
  }
})

const fileFilter = function (req, file, cb) {
  const fileTypes = /jpeg|jpg|png/;
  const mimeType = fileTypes.test(file.mimetype);
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  if(mimeType && extname) return cb(null, true);
  cb("Error: File upload only supports the following filetypes - " + fileTypes);
}

const upload = multer({ fileFilter, storage });

module.exports.upload = upload;

module.exports.uploadFunction = function (req, res) {
  if(req.file.filename) {
    res.status(200).send({ profilePicture: req.file.filename });
  } else {
    res.status(500).send({
      errorCode: 500,
      message: "File is not valid",
    })
  } 
}
