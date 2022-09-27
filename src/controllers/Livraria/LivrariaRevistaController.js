import knex from "../../config/knexfile";
import LivrariaRevistas from "../../models/Livraria/LivrariaRevistas";

class LivrariaRevistaController {
  async storage(req, res) {
    try {
      const dado = await LivrariaRevistas.create(req.body);
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
    const dados = await knex("livraria_revistas")
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

      const dado = await knex("livraria_revistas")
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

      const dado = await LivrariaRevistas.findByPk(id);
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

      const dado = await LivrariaRevistas.findByPk(id);
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
export default new LivrariaRevistaController();
