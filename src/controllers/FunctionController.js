import Function from "../models/Function";

class FunctionController {
  async storage(req, res) {
    try {
      const funcao = await Function.create(req.body);
      if (!funcao) {
        return res.status(400).json({ erros: ["funcao ja existe"] });
      }

      return res.json(funcao);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const funcao = await Function.findAll();
    res.json(funcao);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await Function.findByPk(id);
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

      const funcao = await Function.findByPk(id);
      if (!funcao) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await funcao.update(req.body);
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

      const funcao = await Function.findByPk(id);
      if (!funcao) {
        return res.status(400).json({ erros: ["funcao nao existe"] });
      }
      await funcao.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new FunctionController();
