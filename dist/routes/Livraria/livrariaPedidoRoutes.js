"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _LivrariaPedidoController = require('../../controllers/Livraria/LivrariaPedidoController'); var _LivrariaPedidoController2 = _interopRequireDefault(_LivrariaPedidoController);
var _loginRequered = require('../../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _LivrariaPedidoController2.default.update);
router.post("/", _loginRequered2.default, _LivrariaPedidoController2.default.storage);
router.get("/", _LivrariaPedidoController2.default.index);
router.get("/:id", _LivrariaPedidoController2.default.show);
router.get("/pesquisaData/:id", _LivrariaPedidoController2.default.pesquisaData);
router.delete("/:id", _loginRequered2.default, _LivrariaPedidoController2.default.delete);
exports. default = router;
