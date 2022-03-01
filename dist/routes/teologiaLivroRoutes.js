"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TeologiaLivroController = require('../controllers/TeologiaLivroController'); var _TeologiaLivroController2 = _interopRequireDefault(_TeologiaLivroController);
var _loginRequered = require('../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _TeologiaLivroController2.default.update);
router.post("/", _loginRequered2.default, _TeologiaLivroController2.default.storage);
router.get("/", _TeologiaLivroController2.default.index);
router.get("/:id", _TeologiaLivroController2.default.show);
router.get("/pesquisaData/:id", _TeologiaLivroController2.default.pesquisaData);
router.delete("/:id", _loginRequered2.default, _TeologiaLivroController2.default.delete);
exports. default = router;