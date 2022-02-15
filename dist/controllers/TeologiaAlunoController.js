"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _TeologiaAluno = require('../models/TeologiaAluno'); var _TeologiaAluno2 = _interopRequireDefault(_TeologiaAluno);

class TeologiaAlunoController {
  async storage(req, res) {
    try {
      const aluno = await _TeologiaAluno2.default.create(req.body);
      if (!aluno) {
        return res.status(400).json({ erros: ["aluno ja existe"] });
      }

      return res.json(aluno);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const response = await _knexfile2.default.call(void 0, "teologia_alunos")
      .join("teologia_classes", "classe_id", "=", "teologia_classes.id")
      .select("teologia_alunos.*", "teologia_classes.descricao as desc_classe")
      .orderBy("teologia_alunos.nome");
    // const response = await Membro.findAll();

    return res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const response = await _knexfile2.default.call(void 0, "teologia_alunos")
        .join("teologia_classes", "classe_id", "=", "teologia_classes.id")
        .where("teologia_alunos.id", id)
        .first()
        .select(
          "teologia_alunos.*",
          "teologia_classes.descricao as desc_classe"
        );

      if (!response) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }

      return res.json(response);
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

      const aluno = await _TeologiaAluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await aluno.update(req.body);
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

      const aluno = await _TeologiaAluno2.default.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ erros: ["aluno nao existe"] });
      }
      await aluno.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new TeologiaAlunoController();
