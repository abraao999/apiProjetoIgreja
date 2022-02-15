"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }/* eslint-disable no-return-assign */
var _correios = require('node-correios/lib/correios'); var _correios2 = _interopRequireDefault(_correios);

class CorreioController {
  buscaCep(req, res) {
    const { cep } = req.body;
    let returnCep = "";

    const Correio = new (0, _correios2.default)();
    Correio.consultaCEP(req.body).then((response) => {
      returnCep = response;
      res.send(returnCep);
    });
  }
}
exports. default = new CorreioController();
