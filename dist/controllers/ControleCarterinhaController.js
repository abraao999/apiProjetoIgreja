"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ControleCarterinha = require('../models/ControleCarterinha'); var _ControleCarterinha2 = _interopRequireDefault(_ControleCarterinha);

class ControleCarterinhaController {
  async storage(req, res) {
    try {
      const controleCarterinha = await _ControleCarterinha2.default.create(req.body);
      if (!controleCarterinha) {
        return res.status(400).json({ erros: ["dado ja existe"] });
      }

      return res.json(controleCarterinha);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const controleCarterinha = await _ControleCarterinha2.default.findAll();
    res.json(controleCarterinha);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const controleCarterinha = await _ControleCarterinha2.default.findByPk(id);
      if (!controleCarterinha) {
        return res.status(400).json({ erros: ["dado não existe"] });
      }

      return res.json(controleCarterinha);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async getEntregues(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await _ControleCarterinha2.default.findOne({
        where: { membro_id: id },
      });
      if (!funcoes) {
        return res.status(400).json({ erros: ["dado não existe"] });
      }

      return res.json(funcoes);
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

      const controleCarterinha = await _ControleCarterinha2.default.findByPk(id);
      if (!controleCarterinha) {
        return res.status(400).json({ erros: ["dado não existe"] });
      }
      const novosDados = await _ControleCarterinha2.default.update(req.body);
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

      const controleCarterinha = await _ControleCarterinha2.default.findByPk(id);
      if (!controleCarterinha) {
        return res.status(400).json({ erros: ["dado nao existe"] });
      }
      await controleCarterinha.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new ControleCarterinhaController();
