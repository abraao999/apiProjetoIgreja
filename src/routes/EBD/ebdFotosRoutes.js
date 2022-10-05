/* eslint-disable object-curly-newline */
require("dotenv").config();

import { Router } from "express";
import multer from "multer";
import { S3Client, DeleteObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";
import { promisify } from "util";
import multerConfig from "../../config/multer";
import EbdFotos from "../../models/EBD/EbdFotos";

const router = new Router();

router.post("/", async (req, res) => {
  const dados = await EbdFotos.create(req.body);
  return res.json(dados);
});
router.get("/", async (req, res) => {
  const dados = await EbdFotos.findAll();
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
export default router;
