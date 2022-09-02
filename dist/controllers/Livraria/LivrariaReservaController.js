"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _LivrariaReserva = require('../../models/Livraria/LivrariaReserva'); var _LivrariaReserva2 = _interopRequireDefault(_LivrariaReserva);

class LivrariaReservaController {
  async storage(req, res) {
    try {
      const dado = await _LivrariaReserva2.default.create(req.body);
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
    const dados = await _knexfile2.default.call(void 0, "livraria_reservas")
      .join("livraria_livros", "livro_id", "=", "livraria_livros.id")
      .select("livraria_reservas.*", "livraria_livros.descricao as descricao")
      .orderBy("livraria_reservas.data_reserva", "desc");

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await _knexfile2.default.call(void 0, "livraria_reservas")
        .join("membros", "membro_id", "=", "membros.id")
        .join("livraria_livros", "livro_id", "=", "livraria_livros.id")
        .where("livraria_venda_camisetas.id", id)
        .first()
        .select(
          "livraria_venda_camisetas.*",
          "membros.nome as nome",
          "livraria_livros.descricao as descricao"
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

      const dado = await _LivrariaReserva2.default.findByPk(id);
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

      const dado = await _LivrariaReserva2.default.findByPk(id);
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
exports. default = new LivrariaReservaController();
