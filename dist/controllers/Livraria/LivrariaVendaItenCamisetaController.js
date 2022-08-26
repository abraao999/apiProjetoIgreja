"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _LivrariaVendaItenCamiseta = require('../../models/Livraria/LivrariaVendaItenCamiseta'); var _LivrariaVendaItenCamiseta2 = _interopRequireDefault(_LivrariaVendaItenCamiseta);

class LivrariaVendaItenCamisetaController {
  async storage(req, res) {
    try {
      const dado = await _LivrariaVendaItenCamiseta2.default.create(req.body);
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
    const dados = await _knexfile2.default.call(void 0, "livraria_venda_iten_camisetas")
      .join("livraria_camisetas", "camiseta_id", "=", "livraria_camisetas.id")
      .select(
        "livraria_venda_iten_camisetas.*",
        "livraria_camisetas.descricao as descricao",
        "livraria_camisetas.valor as valor"
      );

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await _LivrariaVendaItenCamiseta2.default.findByPk(id);
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

  async getVenda(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await _knexfile2.default.call(void 0, "livraria_venda_iten_camisetas")
        .join(
          "livraria_venda_camisetas",
          "venda_id",
          "=",
          "livraria_venda_camisetas.id"
        )
        .join("livraria_camisetas", "camiseta_id", "=", "livraria_camisetas.id")
        .where("livraria_venda_iten_camisetas.venda_id", id)
        .select(
          "livraria_venda_iten_camisetas.*",
          "livraria_camisetas.descricao",
          "livraria_camisetas.valor"
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

      const dado = await _LivrariaVendaItenCamiseta2.default.findByPk(id);
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

      const dado = await _LivrariaVendaItenCamiseta2.default.findByPk(id);
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
exports. default = new LivrariaVendaItenCamisetaController();
