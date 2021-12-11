import Departamento from "../models/Departamento";
import Caixa from "../models/Caixa";
import knex from "../config/knexfile";

class CaixaController {
  async storage(req, res) {
    try {
      const dados = await Caixa.create(req.body);
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
    const dados = await knex("caixas")
      .join("setors", "setor_id", "=", "setors.id")
      .join("departamentos", "departamento_id", "=", "departamentos.id")
      .join("desc_caixas", "desc_id", "=", "desc_caixas.id")
      .select(
        "caixas.*",
        "setors.descricao as desc_setor",
        "departamentos.descricao as desc_departamento",
        "desc_caixas.descricao as descricao"
      )
      .orderBy("caixas.data_operacao", "desc");

    res.json(dados);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await Caixa.findByPk(id, {
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

      const dados = await Caixa.findByPk(id);
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

      const dados = await Caixa.findByPk(id);
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

  async maxId(req, res) {
    try {
      const dado = await Caixa.max("id");
      if (!dado) {
        return res.status(400).json({ erros: ["Tabela vazia"] });
      }
      return res.json(dado);
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new CaixaController();
