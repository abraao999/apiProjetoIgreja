"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Membro = require('../models/Membro'); var _Membro2 = _interopRequireDefault(_Membro);

exports. default = async (req, res, next) => {
  const { authorization } = req.headers;
  console.log(req);
  if (!authorization) {
    return res.status(401).json({ erros: "login requerido" });
  }
  const [, tokem] = authorization.split(" ");
  try {
    const dados = _jsonwebtoken2.default.verify(tokem, process.env.TOKEN_SECRET);
    const { id, email } = dados;

    const user = await _Membro2.default.findOne({ where: { id, email } });
    if (!user) {
      return res.status(401).json({ erros: "usuario invalido" });
    }
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (error) {
    return res.status(404).json({ erros: "token expirado ou invalido" });
  }
};
