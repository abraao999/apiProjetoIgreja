import Cargo from "../models/Cargo";

class CargoController {
  async storage(req, res) {
    try {
      const cargo = await Cargo.create(req.body);
      if (!cargo) {
        return res.status(400).json({ erros: ["cargo ja existe"] });
      }

      return res.json(cargo);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const cargo = await Cargo.findAll();
    res.json(cargo);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await Cargo.findByPk(id);
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

      const cargo = await Cargo.findByPk(id);
      if (!cargo) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await cargo.update(req.body);
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

      const cargo = await Cargo.findByPk(id);
      if (!cargo) {
        return res.status(400).json({ erros: ["cargo nao existe"] });
      }
      await cargo.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new CargoController();
