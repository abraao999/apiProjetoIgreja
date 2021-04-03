import knex from "../config/knexfile";
import Departamento from "../models/Departamento";
import Setor from "../models/Setor";

class DepartamentoController {
  async storage(req, res) {
    try {
      const departamento = await Departamento.create(req.body);
      if (!departamento) {
        return res.status(400).json({ erros: ["departamento ja existe"] });
      }

      return res.json(departamento);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const response = await knex("departamentos")
      .join("setors", "departamentos.setor_id", "=", "setors.id")
      .select(
        "departamentos.id as id",
        "departamentos.descricao as dep_descricao",
        "setors.id as setor_id",
        "setors.descricao as setor_descricao"
      );

    return res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await Departamento.findByPk(id, {
        include: { model: Setor, attributes: ["descricao"] },
      });
      if (!funcoes) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }

      return res.json(funcoes);
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

      const departamento = await Departamento.findByPk(id);
      if (!departamento) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await departamento.update(req.body);
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

      const departamento = await Departamento.findByPk(id);
      if (!departamento) {
        return res.status(400).json({ erros: ["departamento nao existe"] });
      }
      await departamento.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new DepartamentoController();
