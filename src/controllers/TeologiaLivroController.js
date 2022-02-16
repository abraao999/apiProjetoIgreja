import knex from "../config/knexfile";
import TeologiaLivro from "../models/TeologiaLivro";

class TeologiaLivroController {
  async storage(req, res) {
    try {
      const livro = await TeologiaLivro.create(req.body);
      if (!livro) {
        return res.status(400).json({ erros: ["livro ja existe"] });
      }

      return res.json(livro);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const livro = await TeologiaLivro.findAll();
    res.json(livro);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await TeologiaLivro.findByPk(id);
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

      const livro = await TeologiaLivro.findByPk(id);
      if (!livro) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await livro.update(req.body);
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

      const livro = await TeologiaLivro.findByPk(id);
      if (!livro) {
        return res.status(400).json({ erros: ["livro nao existe"] });
      }
      await livro.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }

  async pesquisaData(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await knex("teologia_livros")
        .join("teologia_alunos", "aluno_id", "=", "teologia_alunos.id")
        .select("teologia_livros.*", "teologia_alunos.nome as nome")
        .where("teologia_livros.aluno_id", id)
        .orderBy("teologia_livros.data_operacao");
      if (!dados) {
        return res.status(400).json({ erros: ["livro não existe"] });
      }
      return res.json(dados);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new TeologiaLivroController();
