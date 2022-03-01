"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _Membro = require('../models/Membro'); var _Membro2 = _interopRequireDefault(_Membro);

class MembroController {
  async storage(req, res) {
    try {
      const dado = await _Membro2.default.create(req.body);
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
    const response = await _knexfile2.default.call(void 0, "membros")
      .join("setors", "setor_id", "=", "setors.id")
      .join("cargos", "cargo_id", "=", "cargos.id")
      .select(
        "membros.*",
        "setors.descricao as desc_setor",
        "cargos.descricao as desc_cargo"
      )
      .orderBy("membros.nome");
    // const response = await Membro.findAll();

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
        .where("membros.id", id)
        .first()
        .select(
          "membros.*",
          "setors.descricao as desc_setor",
          "cargos.descricao as desc_cargo"
        );
      // const response = await knex("membros").where("membros.id", id).first();
      // const response = await Membro.findOne({ id });
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

  async maxId(req, res) {
    try {
      const dado = await _Membro2.default.max("id");
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
exports. default = new MembroController();
