"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Pedido = require('../models/Pedido'); var _Pedido2 = _interopRequireDefault(_Pedido);

class PedidoController {
  async storage(req, res) {
    try {
      const pedido = await _Pedido2.default.create(req.body);
      if (!pedido) {
        return res.status(400).json({ erros: ["pedido ja existe"] });
      }

      return res.json(pedido);
    } catch (er) {
      return res
        .status(400)
        .json({ erros: er.errors.map((erro) => erro.message) });
    }
  }

  async index(req, res) {
    const pedido = await _Pedido2.default.findAll();
    res.json(pedido);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ erros: ["faltando id"] });
      }

      const funcoes = await _Pedido2.default.findByPk(id);
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

      const pedido = await _Pedido2.default.findByPk(id);
      if (!pedido) {
        return res.status(400).json({ erros: ["Função não existe"] });
      }
      const novosDados = await pedido.update(req.body);
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

      const pedido = await _Pedido2.default.findByPk(id);
      if (!pedido) {
        return res.status(400).json({ erros: ["pedido nao existe"] });
      }
      await pedido.destroy();
      return res.json({ apagado: true });
    } catch (error) {
      return res
        .status(400)
        .json({ erros: error.erros.map((es) => es.message) });
    }
  }
}
exports. default = new PedidoController();
