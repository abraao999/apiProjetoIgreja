"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _LivrariaLivroController = require('../../controllers/Livraria/LivrariaLivroController'); var _LivrariaLivroController2 = _interopRequireDefault(_LivrariaLivroController);
var _loginRequered = require('../../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _LivrariaLivroController2.default.update);
router.post("/", _loginRequered2.default, _LivrariaLivroController2.default.storage);
router.get("/", _LivrariaLivroController2.default.index);
router.get("/:id", _LivrariaLivroController2.default.show);
router.get("/pesquisaData/:id", _LivrariaLivroController2.default.pesquisaData);
router.delete("/:id", _loginRequered2.default, _LivrariaLivroController2.default.delete);
exports. default = router;
