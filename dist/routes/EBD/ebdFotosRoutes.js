"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable object-curly-newline */
require("dotenv").config();

var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _clients3 = require('@aws-sdk/client-s3');
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _util = require('util');
var _multer3 = require('../../config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _EbdFotos = require('../../models/EBD/EbdFotos'); var _EbdFotos2 = _interopRequireDefault(_EbdFotos);

const router = new (0, _express.Router)();

router.post("/", async (req, res) => {
  const dados = await _EbdFotos2.default.create(req.body);
  return res.json(dados);
});
router.get("/", async (req, res) => {
  const dados = await _EbdFotos2.default.findAll();
  return res.json(dados);
});

// const s3 = new S3Client({ region: process.env.AWS_DEFAULT_REGION });

// router.post(
//   "/",

//   multer(multerConfig).single("file"),
//   async (req, res) => {
//     console.log(req.file);
//     let aux;
//     const { originalname: name, size, key, location: url = "" } = req.file;
//     if (!req.file.location) {
//       aux = `${process.env.APP_URL}/files/${key}`;
//     }
//     const dado = await EbdFotos.create({
//       name,
//       size,
//       key,
//       url: url || aux,
//     });
//     return res.send(dado);
//   }
// );
// router.get("/", async (req, res) => {
//   const dados = await EbdFotos.findAll();
//   res.send(dados);
// });
// router.delete("/:id", async (req, res) => {
//   const dados = await EbdFotos.findByPk(req.params.id);
//   const { key: Key } = dados;

//   if (process.env.STORAGE_TYPE === "s3") {
//     const data = await s3.send(
//       new DeleteObjectCommand({ Bucket: "fotosigreja", Key })
//     );
//   } else {
//     promisify(fs.unlink)(
//       path.resolve(__dirname, "..", "..", "..", "uploads", Key)
//     );
//   }
//   await dados.destroy();
//   return res.json({ apagado: true });
// });
exports. default = router;
