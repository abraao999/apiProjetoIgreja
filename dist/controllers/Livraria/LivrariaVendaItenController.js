"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _LivrariaVendaIten = require('../../models/Livraria/LivrariaVendaIten'); var _LivrariaVendaIten2 = _interopRequireDefault(_LivrariaVendaIten);

class LivrariaVendaItenController {
  async storage(req, res) {
    try {
      const dado = await _LivrariaVendaIten2.default.create(req.body);
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
    const dados = await _knexfile2.default.call(void 0, "livraria_venda_itens")
      .join("livraria_livros", "livro_id", "=", "livraria_livros.id")
      .select(
        "livraria_venda_itens.*",
        "livraria_livros.descricao as descricao",
        "livraria_livros.valor as valor"
      );

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await _LivrariaVendaIten2.default.findByPk(id);
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

      const dado = await _knexfile2.default.call(void 0, "livraria_venda_itens")
        .join("livraria_vendas", "venda_id", "=", "livraria_vendas.id")
        .join("livraria_livros", "livro_id", "=", "livraria_livros.id")
        .where("livraria_venda_itens.venda_id", id)
        .select(
          "livraria_venda_itens.*",
          "livraria_livros.descricao",
          "livraria_livros.valor"
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

      const dado = await _LivrariaVendaIten2.default.findByPk(id);
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

      const dado = await _LivrariaVendaIten2.default.findByPk(id);
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
exports. default = new LivrariaVendaItenController();
