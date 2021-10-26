"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _Membro = require('../models/Membro'); var _Membro2 = _interopRequireDefault(_Membro);
var _NomeVisitantes = require('../models/NomeVisitantes'); var _NomeVisitantes2 = _interopRequireDefault(_NomeVisitantes);

class NomesVisitanteController {
  async storage(req, res) {
    try {
      const dado = await _NomeVisitantes2.default.create(req.body);
      // const dado = req.body;
      // console.log(dado);
      if (!dado) {
        return res.status(400).json({ erros: ["dado ja existe"] });
      }

      return res.json(dado);
    } catch (er) {
      console.log(er);
      // return res.status(400);
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const response = await _knexfile2.default.call(void 0, "nomes_visitantes")
      .join("familia_visitantes", "familia_id", "=", "familia_visitantes.id")
      .select(
        "nomes_visitantes.*",
        "familia_visitantes.data_culto as dataCulto"
        // "functions.descricao as desc_function",
        // "cargos.descricao as desc_cargo"
      )
      .orderBy("nomes_visitantes.familia_id");
    // const response = await knex("nomes_visitantes");

    return res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const response = await _knexfile2.default.call(void 0, "membros")
        .join("setors", "setor_id", "=", "setors.id")
        .join("cargos", "cargo_id", "=", "cargos.id")
        .join("functions", "function_id", "=", "functions.id")
        .where("membros.id", id)
        .first()
        .select(
          "membros.*",
          "setors.descricao as desc_setor",
          "functions.descricao as desc_function",
          "cargos.descricao as desc_cargo"
        )
        .orderBy("membros.nome");
      if (!response) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }

      return res.json(response);
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

      const dado = await _Membro2.default.findByPk(id);
      if (!dado) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await dado.update(req.body);
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

      const dado = await _Membro2.default.findByPk(id);
      if (!dado) {
        return res.status(400).json({ erros: ["dado nao existe"] });
      }
      await dado.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async getNomes(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const response = await _knexfile2.default.call(void 0, "nomes_visitantes")
        .where("nomes_visitantes.familia_id", id)
        .select("nomes_visitantes.*");

      if (!response) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }

      return res.json(response);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new NomesVisitanteController();
