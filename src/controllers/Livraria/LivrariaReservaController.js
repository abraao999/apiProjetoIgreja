import knex from "../../config/knexfile";
import LivrariaReserva from "../../models/Livraria/LivrariaReserva";

class LivrariaReservaController {
  async storage(req, res) {
    try {
      const dado = await LivrariaReserva.create(req.body);
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
    const dados = await knex("livraria_reservas")
      .join("membros", "membro_id", "=", "membros.id")
      .join("livraria_livros", "livro_id", "=", "livraria_livros.id")
      .select(
        "livraria_venda_camisetas.*",
        "membros.nome as nome",
        "livraria_livros.descricao as descricao"
      )
      .orderBy("livraria_reservas.data_reserva", "desc");

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await knex("livraria_reservas")
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

      const dado = await LivrariaReserva.findByPk(id);
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

      const dado = await LivrariaReserva.findByPk(id);
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
export default new LivrariaReservaController();
