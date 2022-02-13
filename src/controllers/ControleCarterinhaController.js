import ControleCarterinha from "../models/ControleCarterinha";

class ControleCarterinhaController {
  async storage(req, res) {
    try {
      const controleCarterinha = await ControleCarterinha.create(req.body);
      if (!controleCarterinha) {
        return res.status(400).json({ erros: ["dado ja existe"] });
      }

      return res.json(controleCarterinha);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const controleCarterinha = await ControleCarterinha.findAll();
    res.json(controleCarterinha);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const controleCarterinha = await ControleCarterinha.findByPk(id);
      if (!controleCarterinha) {
        return res.status(400).json({ erros: ["dado não existe"] });
      }

      return res.json(controleCarterinha);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async getEntregues(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await ControleCarterinha.findOne({
        where: { membro_id: id },
      });
      if (!funcoes) {
        return res.status(400).json({ erros: ["dado não existe"] });
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

      const controleCarterinha = await ControleCarterinha.findByPk(id);
      if (!controleCarterinha) {
        return res.status(400).json({ erros: ["dado não existe"] });
      }
      const novosDados = await ControleCarterinha.update(req.body);
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

      const controleCarterinha = await ControleCarterinha.findByPk(id);
      if (!controleCarterinha) {
        return res.status(400).json({ erros: ["dado nao existe"] });
      }
      await controleCarterinha.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new ControleCarterinhaController();
