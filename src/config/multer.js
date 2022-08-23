require("dotenv").config();

import multer from "multer";
import path from "path";
import crypto from "crypto";
import multerS3 from "multer-s3";
import { S3Client } from "@aws-sdk/client-s3";

const storageTypes = {
  local: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, path.resolve(__dirname, "..", "..", "uploads"));
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);
        file.key = `${hash.toString("hex")}-${file.originalname}`;
        cb(null, file.key);
      });
    },
  }),
  s3: multerS3({
    s3: new S3Client({ region: process.env.AWS_DEFAULT_REGION }),
    bucket: "fotosigreja",
    contentType: multerS3.AUTO_CONTENT_TYPE,
    acl: "public-read",
    key: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
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
export default {
  dest: path.resolve(__dirname, "..", "..", "uploads"),
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
