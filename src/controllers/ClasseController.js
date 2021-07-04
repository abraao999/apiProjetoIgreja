import Departamento from "../models/Departamento";
import Classe from "../models/Classe";
import knex from '../config/knexfile';

class ClasseController {
  async storage(req, res) {
    try {
      const dados = await Classe.create(req.body);
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
    const dados = await knex('classes');
    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await knex('classes').where('classes.id', id).first();
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
      const { descricao, setor_id } = req.body;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await knex('classes').where('classes.id', id).first();
      if (!dados) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await knex('classes').where('classes.id', id)
        .update({ descricao, setor_id });
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

      const dados = await Classe.findByPk(id);
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
export default new ClasseController();
