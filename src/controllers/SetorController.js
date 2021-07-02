import knex from "../config/knexfile";
import Setor from "../models/Setor";

class SetorController {
  async storage(req, res) {
    try {
      const setor = await Setor.create(req.body);
      if (!setor) {
        return res.status(400).json({ erros: ["setor ja existe"] });
      }

      return res.json(setor);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const setor = await knex('setors');
    res.json(setor);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await Setor.findByPk(id);
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

      const setor = await Setor.findByPk(id);
      if (!setor) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await setor.update(req.body);
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

      const setor = await Setor.findByPk(id);
      if (!setor) {
        return res.status(400).json({ erros: ["setor nao existe"] });
      }
      await setor.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new SetorController();
