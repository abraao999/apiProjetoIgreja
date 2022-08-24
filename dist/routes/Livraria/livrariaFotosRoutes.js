"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable object-curly-newline */
require("dotenv").config();

var _express = require('express');
var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _clients3 = require('@aws-sdk/client-s3');
var _fs = require('fs'); var _fs2 = _interopRequireDefault(_fs);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _util = require('util');
var _multer3 = require('../../config/multer'); var _multer4 = _interopRequireDefault(_multer3);
var _LivrariaFotos = require('../../models/Livraria/LivrariaFotos'); var _LivrariaFotos2 = _interopRequireDefault(_LivrariaFotos);

const s3 = new (0, _clients3.S3Client)({ region: process.env.AWS_DEFAULT_REGION });

const router = new (0, _express.Router)();

router.post(
  "/",

  _multer2.default.call(void 0, _multer4.default).single("file"),
  async (req, res) => {
    console.log(req.file);
    let aux;
    const { originalname: name, size, key, location: url = "" } = req.file;
    if (!req.file.location) {
      aux = `${process.env.APP_URL}/files/${key}`;
    }
    const dado = await _LivrariaFotos2.default.create({
      name,
      size,
      key,
      url: url || aux,
    });
    return res.send(dado);
  }
);
router.get("/", async (req, res) => {
  const dados = await _LivrariaFotos2.default.findAll();
  res.send(dados);
});
router.delete("/:id", async (req, res) => {
  const dados = await _LivrariaFotos2.default.findByPk(req.params.id);
  const { key: Key } = dados;

  if (process.env.STORAGE_TYPE === "s3") {
    console.log("aqui");
    const data = await s3.send(
      new (0, _clients3.DeleteObjectCommand)({ Bucket: "fotosigreja", Key })
    );
    console.log(data, "aqui");
  } else {
    _util.promisify.call(void 0, _fs2.default.unlink)(
      _path2.default.resolve(__dirname, "..", "..", "..", "uploads", Key)
    );
  }
  await dados.destroy();
  return res.json({ apagado: true });
});
exports. default = router;
