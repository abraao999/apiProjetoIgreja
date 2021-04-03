"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _Departamento = require('../models/Departamento'); var _Departamento2 = _interopRequireDefault(_Departamento);
var _Setor = require('../models/Setor'); var _Setor2 = _interopRequireDefault(_Setor);

class DepartamentoController {
  async storage(req, res) {
    try {
      const departamento = await _Departamento2.default.create(req.body);
      if (!departamento) {
        return res.status(400).json({ erros: ["departamento ja existe"] });
      }

      return res.json(departamento);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const response = await _knexfile2.default.call(void 0, "departamentos")
      .join("setors", "departamentos.setor_id", "=", "setors.id")
      .select(
        "departamentos.id as id",
        "departamentos.descricao as descricao",
        "setors.id as setor_id",
        "setors.descricao as setor_descricao"
      );

    return res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await _Departamento2.default.findByPk(id, {
        include: { model: _Setor2.default, attributes: ["descricao"] },
      });
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

      const departamento = await _Departamento2.default.findByPk(id);
      if (!departamento) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await departamento.update(req.body);
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

      const departamento = await _Departamento2.default.findByPk(id);
      if (!departamento) {
        return res.status(400).json({ erros: ["departamento nao existe"] });
      }
      await departamento.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new DepartamentoController();
