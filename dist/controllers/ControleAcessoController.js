"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ControleAcesso = require('../models/ControleAcesso'); var _ControleAcesso2 = _interopRequireDefault(_ControleAcesso);

class ControleAcessoController {
  async storage(req, res) {
    try {
      const controleAcesso = await _ControleAcesso2.default.create(req.body);
      if (!controleAcesso) {
        return res.status(400).json({ erros: ["dado ja existe"] });
      }

      return res.json(controleAcesso);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const controleAcesso = await _ControleAcesso2.default.findAll();
    res.json(controleAcesso);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await _ControleAcesso2.default.findByPk(id);
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

  async getPermicoes(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await _ControleAcesso2.default.findAll({
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

      const controleAcesso = await _ControleAcesso2.default.findByPk(id);
      if (!controleAcesso) {
        return res.status(400).json({ erros: ["dado não existe"] });
      }
      const novosDados = await controleAcesso.update(req.body);
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

      const controleAcesso = await _ControleAcesso2.default.findByPk(id);
      if (!controleAcesso) {
        return res.status(400).json({ erros: ["dado nao existe"] });
      }
      await controleAcesso.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new ControleAcessoController();
