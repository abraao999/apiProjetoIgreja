"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _LivrariaVendaItenController = require('../../controllers/Livraria/LivrariaVendaItenController'); var _LivrariaVendaItenController2 = _interopRequireDefault(_LivrariaVendaItenController);
var _loginRequered = require('../../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _LivrariaVendaItenController2.default.update);
router.post("/", _loginRequered2.default, _LivrariaVendaItenController2.default.storage);
router.get("/", _LivrariaVendaItenController2.default.index);
router.get("/:id", _LivrariaVendaItenController2.default.show);
router.get("/getItens/:id", _LivrariaVendaItenController2.default.getVenda);
router.delete("/:id", _loginRequered2.default, _LivrariaVendaItenController2.default.delete);
exports. default = router;
