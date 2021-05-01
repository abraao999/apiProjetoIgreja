"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Abatimento = require('../models/Abatimento'); var _Abatimento2 = _interopRequireDefault(_Abatimento);
var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);

class AbatimentoController {
  async storage(req, res) {
    try {
      const dados = await _Abatimento2.default.create(req.body);
      if (!dados) {
        return res.status(400).json({ erros: ["departamento ja existe"] });
      }

      return res.json(dados);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const dados = await _knexfile2.default.call(void 0, "abatimentos")
      .join("setors", "setor_id", "=", "setors.id")
      .select("abatimentos.*", "setors.descricao as desc_setor")
      .orderBy("abatimentos.data_operacao");

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await _Abatimento2.default.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["Função não existe"] });
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

      const dados = await _Abatimento2.default.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["Função não existe"] });
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

      const dados = await _Abatimento2.default.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["abatimento nao existe"] });
      }
      await dados.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async maxId(req, res) {
    try {
      const dado = await _Abatimento2.default.max("id");
      if (!dado) {
        return res.status(400).json({ erros: ["Tabela vazia"] });
      }
      return res.json(dado);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new AbatimentoController();
