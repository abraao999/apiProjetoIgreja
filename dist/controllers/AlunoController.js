"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Departamento = require('../models/Departamento'); var _Departamento2 = _interopRequireDefault(_Departamento);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _knexfile = require('../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);
var _Membro = require('../models/Membro'); var _Membro2 = _interopRequireDefault(_Membro);

class AlunoController {
  async storage(req, res) {
    try {
      const dados = await _Aluno2.default.create(req.body);
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
    const response = await _knexfile2.default.call(void 0, "alunos")
      .join("classes", "classe_id", "=", "classes.id")
      .select(
        "alunos.*",
        "classes.descricao as desc_classes",
      )
      .orderBy("alunos.nome");

    return res.json(response);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await _knexfile2.default.call(void 0, "alunos")
        .join("setors", "setor_id", "=", "setors.id")
        .join("classes", "classe_id", "=", "classes.id")
        .where("alunos.id", id)
        .first()
        .select(
          "alunos.*",
          "setors.descricao as desc_setor",
          "classes.descricao as desc_classe"
        )
        .orderBy("alunos.nome");
      if (!dados) {
        return res.status(400).json({ erros: ["Aluno não existe"] });
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
      const {
        nome, telefone, cpf, data_aniversario, setor_id, classe_id
      } = req.body;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dados = await _knexfile2.default.call(void 0, 'alunos').where('alunos.id', id);
      if (!dados) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await _knexfile2.default.call(void 0, 'alunos').where('alunos.id', id).update({
        nome, telefone, cpf, data_aniversario, setor_id, classe_id
      });
      return res.json({
        nome, telefone, cpf, data_aniversario, setor_id, classe_id
      });
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

      const dados = await _knexfile2.default.call(void 0, 'alunos').where('alunos.id', id);
      if (!dados) {
        return res.status(400).json({ erros: ["aluno nao existe"] });
      }
      await _knexfile2.default.call(void 0, 'alunos').where('alunos.id', id).del();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new AlunoController();
