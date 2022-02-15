import TeologiaChamada from "../models/TeologiaChamada";
import knex from "../config/knexfile";

class TeologiaChamadaController {
  async storage(req, res) {
    try {
      const dado = await TeologiaChamada.create(req.body);
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
    const dado = await knex("teologia_chamadas")
      .join("teologia_alunos", "aluno_id", "=", "teologia_alunos.id")
      .join("teologia_classes", "classe_id", "=", "teologia_classes.id")
      .select(
        "teologia_chamadas.*",
        "teologia_classes.descricao as desc_classes",
        "teologia_classes.id as id_classe",
        "teologia_alunos.nome as desc_aluno"
      )
      .orderBy("teologia_chamadas.data_aula");

    res.json(dado);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await knex("teologia_chamadas")
        .join("teologia_alunos", "aluno_id", "=", "teologia_alunos.id")
        .join("teologia_classes", "classe_id", "=", "teologia_classes.id")
        .where("chadamas.id", id)

        .select(
          "teologia_chamadas.*",
          "teologia_classes.descricao as desc_classe",
          "teologia_classes.id as id_classe",
          "teologia_alunos.nome as desc_aluno"
        )
        .orderBy("teologia_chamadas.data_aula");

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

      const chamada = await TeologiaChamada.findByPk(id);
      if (!chamada) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await TeologiaChamada.update(req.body);
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

      const dados = await knex("teologia_chamadas").where(
        "teologia_chamadas.id",
        id
      );
      if (!dados) {
        return res.status(400).json({ erros: ["aluno nao existe"] });
      }
      await knex("teologia_chamadas").where("teologia_chamadas.id", id).del();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new TeologiaChamadaController();
