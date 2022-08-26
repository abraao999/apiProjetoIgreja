"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _LivrariaVendaItenCamisetaController = require('../../controllers/Livraria/LivrariaVendaItenCamisetaController'); var _LivrariaVendaItenCamisetaController2 = _interopRequireDefault(_LivrariaVendaItenCamisetaController);
var _loginRequered = require('../../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _LivrariaVendaItenCamisetaController2.default.update);
router.post("/", _loginRequered2.default, _LivrariaVendaItenCamisetaController2.default.storage);
router.get("/", _LivrariaVendaItenCamisetaController2.default.index);
router.get("/:id", _LivrariaVendaItenCamisetaController2.default.show);
router.get("/getItens/:id", _LivrariaVendaItenCamisetaController2.default.getVenda);
router.delete(
  "/:id",
  _loginRequered2.default,
  _LivrariaVendaItenCamisetaController2.default.delete
);
exports. default = router;
