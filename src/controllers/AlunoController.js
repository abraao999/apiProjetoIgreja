import Departamento from "../models/Departamento";
import Aluno from "../models/Aluno";
import knex from "../config/knexfile";

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
      .join("setors", "setor_id", "=", "setors.id")
      .select(
        "alunos.*",
        "classes.descricao as desc_classes",
        "setors.descricao as desc_setor",
      )
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
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await Aluno.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await dados.update(req.body);
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

      const dados = await Aluno.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["departamento nao existe"] });
      }
      await dados.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new AlunoController();
