"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }require("dotenv").config();

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);
var _multers3 = require('multer-s3'); var _multers32 = _interopRequireDefault(_multers3);
var _clients3 = require('@aws-sdk/client-s3');

const storageTypes = {
  local: _multer2.default.diskStorage({
    destination: (req, file, cb) => {
      cb(null, _path2.default.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      _crypto2.default.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        file.key = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, file.key);
      });
    },
  }),
  s3: _multers32.default.call(void 0, {
    s3: new (0, _clients3.S3Client)({ region: process.env.AWS_DEFAULT_REGION }),
    bucket: "fotosigreja",
    contentType: _multers32.default.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      _crypto2.default.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        const fileName = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, fileName);
      });
    },
  }),
};

// const storageS3= new aws.S3({
//   accessKeyId:process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey:process.env.

// })
exports. default = {
  dest: _path2.default.resolve(__dirname, "..", "..", "uploads"),
  storage: storageTypes[process.env.STORAGE_TYPE],
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      "image/jpeg",
      "image/pjpeg",
      "image/png",
      "image/gif",
    ];
    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error("arquivo invalido"));
    }
  },
};
