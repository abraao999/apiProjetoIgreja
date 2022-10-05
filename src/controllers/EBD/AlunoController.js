import Aluno from "../../models/EBD/Aluno";
import knex from "../../config/knexfile";

class AlunoController {
  async storage(req, res) {
    try {
      const dados = await Aluno.create(req.body);
      if (!dados) {
        return res.status(400).json({ erros: ["departamento ja existe"] });
      }

      return res.json(dados);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const response = await knex("alunos")
      .join("classes", "classe_id", "=", "classes.id")
      .select("alunos.*", "classes.descricao as desc_classes")
      .orderBy("alunos.nome");

    return res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await knex("alunos")
        .join("setors", "setor_id", "=", "setors.id")
        .join("classes", "classe_id", "=", "classes.id")
        .where("alunos.id", id)
        .first()
        .select(
          "alunos.*",
          "setors.descricao as desc_setor",
          "classes.descricao as desc_classe"
        )
        .orderBy("alunos.nome");
      if (!dados) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }

      return res.json(dados);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      // const {
      //   nome, telefone, cpf, data_aniversario, setor_id, classe_id
      // } = req.body;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      await knex("alunos").where("alunos.id", id).update(req.body);
      const novosDados = await knex("alunos").where("alunos.id", id);
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

      const dados = await knex("alunos").where("alunos.id", id);
      if (!dados) {
        return res.status(400).json({ erros: ["aluno nao existe"] });
      }
      await knex("alunos").where("alunos.id", id).del();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new AlunoController();
