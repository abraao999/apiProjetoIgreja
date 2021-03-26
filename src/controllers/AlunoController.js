import Departamento from "../models/Departamento";
import Aluno from "../models/Aluno";

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
    const dados = await Aluno.findAll();
    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await Aluno.findByPk(id, {
        include: { model: Departamento, attributes: ["descricao"] },
      });
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
