"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _Membro = require('../models/Membro'); var _Membro2 = _interopRequireDefault(_Membro);
var _ControleAcesso = require('../models/ControleAcesso'); var _ControleAcesso2 = _interopRequireDefault(_ControleAcesso);
// import Tokem from '../models/Tokem';

class TokenController {
  async store(req, res) {
    const { email = "", password = "" } = req.body;
    if (!email || !password) {
      return res.status(401).json({
        erros: "credenciais invalidas",
      });
    }
    const user = await _Membro2.default.findOne({ where: { email } });
    if (!user) {
      return res.status(401).json({
        erros: "usuario nao existe",
      });
    }
    if (!(await user.passwordIsValid(password))) {
      return res.status(401).json({
        erros: "senha invalida",
      });
    }
    const { id } = user;
    const tokem = _jsonwebtoken2.default.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });
    const function_id = await _ControleAcesso2.default.findAll({
      where: { membro_id: id },
    });
    return res.json({ tokem, user, function_id });
  }
}
exports. default = new TokenController();
