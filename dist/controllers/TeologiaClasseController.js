"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _TeologiaClasse = require('../models/TeologiaClasse'); var _TeologiaClasse2 = _interopRequireDefault(_TeologiaClasse);

class TeologiaClasseController {
  async storage(req, res) {
    try {
      const classe = await _TeologiaClasse2.default.create(req.body);
      if (!classe) {
        return res.status(400).json({ erros: ["classe ja existe"] });
      }

      return res.json(classe);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const classe = await _TeologiaClasse2.default.findAll();
    res.json(classe);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await _TeologiaClasse2.default.findByPk(id);
      if (!funcoes) {
        return res.status(400).json({ erros: ["Função não existe"] });
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

      const classe = await _TeologiaClasse2.default.findByPk(id);
      if (!classe) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await classe.update(req.body);
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

      const classe = await _TeologiaClasse2.default.findByPk(id);
      if (!classe) {
        return res.status(400).json({ erros: ["classe nao existe"] });
      }
      await classe.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new TeologiaClasseController();
