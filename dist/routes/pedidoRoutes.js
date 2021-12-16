"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _PedidoController = require('../controllers/PedidoController'); var _PedidoController2 = _interopRequireDefault(_PedidoController);

const router = new (0, _express.Router)();

router.put("/:id", _PedidoController2.default.update);
router.post("/", _PedidoController2.default.storage);
router.get("/", _PedidoController2.default.index);
router.get("/:id", _PedidoController2.default.show);
router.delete("/:id", _PedidoController2.default.delete);
exports. default = router;
