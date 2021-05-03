import Dizimo from "../models/Dizimo";
import knex from "../config/knexfile";

class DizimoController {
  async storage(req, res) {
    try {
      const dados = await Dizimo.create(req.body);
      if (!dados) {
        return res.status(400).json({ erros: ["dizimo ja existe"] });
      }

      return res.json(dados);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const dados = await knex("dizimos")
      .join("membros", "membro_id", "=", "membros.id")
      .select("dizimo.*", "membros.nome as nome")
      .orderBy("dizimo.data_operacao");

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await Dizimo.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["Dizimo não existe"] });
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

      const dados = await Dizimo.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["Dizimo não existe"] });
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

      const dados = await Dizimo.findByPk(id);
      if (!dados) {
        return res.status(400).json({ erros: ["dizimo não existe"] });
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
export default new DizimoController();