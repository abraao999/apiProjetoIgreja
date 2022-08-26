import knex from "../../config/knexfile";
import LivrariaVendaItenCamisetas from "../../models/Livraria/LivrariaVendaItenCamiseta";

class LivrariaVendaItenCamisetaController {
  async storage(req, res) {
    try {
      const dado = await LivrariaVendaItenCamisetas.create(req.body);
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
    const dados = await knex("livraria_venda_iten_camisetas")
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

      const dado = await LivrariaVendaItenCamisetas.findByPk(id);
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

      const dado = await knex("livraria_venda_iten_camisetas")
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

      const dado = await LivrariaVendaItenCamisetas.findByPk(id);
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

      const dado = await LivrariaVendaItenCamisetas.findByPk(id);
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
export default new LivrariaVendaItenCamisetaController();
