import knex from "../../config/knexfile";
import LivrariaVendaCamisetas from "../../models/Livraria/LivrariaVendaCamiseta";
import Membro from "../../models/Membro";

class LivrariaVendaCamisetaController {
  async storage(req, res) {
    try {
      const dado = await LivrariaVendaCamisetas.create(req.body);
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
    const dados = await knex("livraria_venda_camisetas")
      .join("membros", "membro_id", "=", "membros.id")
      .select("livraria_venda_camisetas.*", "membros.nome as nome")
      .orderBy("livraria_venda_camisetas.data_venda", "desc");

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await knex("livraria_venda_camisetas")
        .join("membros", "membro_id", "=", "membros.id")
        .where("livraria_venda_camisetas.id", id)
        .first()
        .select("livraria_venda_camisetas.*", "membros.nome as nome");
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

      const dado = await LivrariaVendaCamisetas.findByPk(id);
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

      const dado = await LivrariaVendaCamisetas.findByPk(id);
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
export default new LivrariaVendaCamisetaController();
