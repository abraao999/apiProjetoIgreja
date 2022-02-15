import knex from "../config/knexfile";
import TeologiaAluno from "../models/TeologiaAluno";

class TeologiaAlunoController {
  async storage(req, res) {
    try {
      const aluno = await TeologiaAluno.create(req.body);
      if (!aluno) {
        return res.status(400).json({ erros: ["aluno ja existe"] });
      }

      return res.json(aluno);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const response = await knex("teologia_alunos")
      .join("teologia_classes", "classe_id", "=", "teologia_classes.id")
      .select("teologia_alunos.*", "teologia_classes.descricao as desc_classe")
      .orderBy("teologia_alunos.nome");
    // const response = await Membro.findAll();

    return res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const response = await knex("teologia_alunos")
        .join("teologia_classes", "classe_id", "=", "teologia_classes.id")
        .where("teologia_alunos.id", id)
        .first()
        .select(
          "teologia_alunos.*",
          "teologia_classes.descricao as desc_classe"
        );

      if (!response) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }

      return res.json(response);
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

      const aluno = await TeologiaAluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await aluno.update(req.body);
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

      const aluno = await TeologiaAluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ erros: ["aluno nao existe"] });
      }
      await aluno.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new TeologiaAlunoController();
