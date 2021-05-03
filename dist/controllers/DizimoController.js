"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Dizimo = require('../models/Dizimo'); var _Dizimo2 = _interopRequireDefault(_Dizimo);
var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);

class DizimoController {
  async storage(req, res) {
    try {
      const dados = await _Dizimo2.default.create(req.body);
      if (!dados) {
        return res.status(400).json({ erros: ["dizimo ja existe"] });
      }

      return res.json(dados);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const dados = await _knexfile2.default.call(void 0, "dizimos")
      .join("membros", "membro_id", "=", "membros.id")
      .select("dizimos.*", "membros.nome as nome")
      .orderBy("dizimos.data_operacao");

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await _Dizimo2.default.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["Dizimo não existe"] });
      }

      return res.json(dados);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await _Dizimo2.default.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["Dizimo não existe"] });
      }
      const novosDados = await dados.update(req.body);
      return res.json(novosDados);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await _Dizimo2.default.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["dizimo não existe"] });
      }
      await dados.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new DizimoController();
