import knex from "../config/knexfile";
import Membro from "../models/Membro";

class MembroController {
  async storage(req, res) {
    try {
      const dado = await Membro.create(req.body);
      // const dado = req.body;
      // console.log(dado);
      if (!dado) {
        return res.status(400).json({ erros: ["dado ja existe"] });
      }

      return res.json(dado);
    } catch (er) {
      console.log(er);
      // return res.status(400);
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const response = await knex("membros")
      .join("setors", "setor_id", "=", "setors.id")
      .join("functions", "function_id", "=", "functions.id")
      .join("cargos", "cargo_id", "=", "cargos.id")
      .select(
        "membros.*",
        "setors.descricao as desc_setor",
        "functions.descricao as desc_function",
        "cargos.descricao as desc_cargo"
      );

    return res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await Membro.findByPk(id);
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

      const dado = await Membro.findByPk(id);
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

      const dado = await Membro.findByPk(id);
      if (!dado) {
        return res.status(400).json({ erros: ["dado nao existe"] });
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
export default new MembroController();
