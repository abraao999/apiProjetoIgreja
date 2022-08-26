import knex from "../../config/knexfile";
import DescLancamento from "../../models/tesouraria/DescLancamento";

class DescCaixaController {
  async storage(req, res) {
    try {
      const descCaixa = await DescLancamento.create(req.body);
      if (!descCaixa) {
        return res.status(400).json({ erros: ["descrição ja existe"] });
      }

      return res.json(descCaixa);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const descCaixa = await knex("desc_caixas").orderBy(
      "desc_caixas.descricao",
      "asc"
    );
    res.json(descCaixa);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await DescLancamento.findByPk(id);
      if (!funcoes) {
        return res.status(400).json({ erros: ["descrição não existe"] });
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

      const descCaixa = await DescLancamento.findByPk(id);
      if (!descCaixa) {
        return res.status(400).json({ erros: ["descrição não existe"] });
      }
      const novosDados = await descCaixa.update(req.body);
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

      const descCaixa = await DescLancamento.findByPk(id);
      if (!descCaixa) {
        return res.status(400).json({ erros: ["a descrição não existe"] });
      }
      await descCaixa.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
export default new DescCaixaController();
