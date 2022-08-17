"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Chamada = require('../../models/EBD/Chamada'); var _Chamada2 = _interopRequireDefault(_Chamada);
var _knexfile = require('../../config/knexfile'); var _knexfile2 = _interopRequireDefault(_knexfile);

class ChamadaController {
  async storage(req, res) {
    try {
      const dado = await _Chamada2.default.create(req.body);
      if (!dado) {
        return res.status(400).json({ erros: ["Chamada ja existe"] });
      }

      return res.json(dado);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const dado = await _knexfile2.default.call(void 0, "chamadas")
      .join("alunos", "aluno_id", "=", "alunos.id")
      .join("classes", "classe_id", "=", "classes.id")
      .select(
        "chamadas.*",
        "classes.descricao as desc_classes",
        "classes.id as id_classe",
        "alunos.nome as desc_aluno",
      )
      .orderBy("chamadas.data_aula");

    res.json(dado);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const dado = await _knexfile2.default.call(void 0, "chamadas")
        .join("alunos", "aluno_id", "=", "alunos.id")
        .join("classes", "classe_id", "=", "classes.id")
        .where("chadamas.id", id)

        .select(
          "chamadas.*",
          "classes.descricao as desc_classes",
          "classes.id as id_classe",
          "alunos.nome as desc_aluno",
        )
        .orderBy("chamadas.data_aula");

      if (!dado) {
        return res.status(400).json({ erros: ["dado não existe"] });
      }

      return res.json(dado);
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

      const chamada = await _Chamada2.default.findByPk(id);
      if (!chamada) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await _Chamada2.default.update(req.body);
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

      const dados = await _knexfile2.default.call(void 0, 'chamadas').where('chamadas.id', id);
      if (!dados) {
        return res.status(400).json({ erros: ["aluno nao existe"] });
      }
      await _knexfile2.default.call(void 0, 'chamadas').where('chamadas.id', id).del();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new ChamadaController();
