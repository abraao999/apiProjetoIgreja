"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _LivrariaRevistas = require('../../models/Livraria/LivrariaRevistas'); var _LivrariaRevistas2 = _interopRequireDefault(_LivrariaRevistas);

class LivrariaRevistaController {
  async storage(req, res) {
    try {
      const dado = await _LivrariaRevistas2.default.create(req.body);
      if (!dado) {
        return res.status(400).json({ erros: ["livro ja existe"] });
      }

      return res.json(dado);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const dados = await _knexfile2.default.call(void 0, "livraria_revistas")
      .join("setors", "setor_id", "=", "setors.id")
      .join("classes", "classe_id", "=", "classes.id")
      .select(
        "livraria_revistas.*",
        "setors.descricao as desc_setor",
        "classes.descricao as desc_classe"
      )
      .orderBy("livraria_revistas.data_pedido", "desc");

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await _knexfile2.default.call(void 0, "livraria_revistas")
        .join("classes", "classe_id", "=", "classes.id")
        .join("setors", "setor_id", "=", "setors.id")
        .where("livraria_revistas.id", id)
        .first()
        .select(
          "livraria_revistas.*",
          "classes.descricao as nome",
          "setors.descricao as descricao"
        );
      if (!dado) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }

      return res.json(dado);
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

      const dado = await _LivrariaRevistas2.default.findByPk(id);
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

      const dado = await _LivrariaRevistas2.default.findByPk(id);
      if (!dado) {
        return res.status(400).json({ erros: ["livro nao existe"] });
      }
      await dado.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new LivrariaRevistaController();
