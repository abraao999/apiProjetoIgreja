import Chamada from "../models/Chamada";
import knex from "../config/knexfile";

class ChamadaController {
  async storage(req, res) {
    try {
      const dado = await Chamada.create(req.body);
      if (!dado) {
        return res.status(400).json({ erros: ["Chamada ja existe"] });
      }

      return res.json(dado);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const dado = await knex("chamadas")
      .join("alunos", "aluno_id", "=", "alunos.id")
      .join("classes", "classe_id", "=", "classes.id")
      .select(
        "chamadas.*",
        "classes.descricao as desc_classes",
        "classes.id as id_classe",
        "alunos.nome as desc_aluno",
      )
      .orderBy("chamadas.data_aula");

    res.json(dado);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await knex("chamadas")
        .join("alunos", "aluno_id", "=", "alunos.id")
        .join("classes", "classe_id", "=", "classes.id")
        .where("chadamas.id", id)

        .select(
          "chamadas.*",
          "classes.descricao as desc_classes",
          "classes.id as id_classe",
          "alunos.nome as desc_aluno",
        )
        .orderBy("chamadas.data_aula");

      if (!dado) {
        return res.status(400).json({ erros: ["dado não existe"] });
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

      const chamada = await Chamada.findByPk(id);
      if (!chamada) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await Chamada.update(req.body);
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

      const chamada = await Chamada.findByPk(id);
      if (!chamada) {
        return res.status(400).json({ erros: ["Chamada nao existe"] });
      }
      await Chamada.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new ChamadaController();
