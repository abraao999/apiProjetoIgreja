"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ControleAcessoController = require('../controllers/ControleAcessoController'); var _ControleAcessoController2 = _interopRequireDefault(_ControleAcessoController);
var _loginRequered = require('../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _ControleAcessoController2.default.update);
router.post("/", _ControleAcessoController2.default.storage);
router.get("/", _ControleAcessoController2.default.index);
router.get("/:id", _ControleAcessoController2.default.show);
router.get("/getPermicoes/:id", _ControleAcessoController2.default.getPermicoes);
router.delete("/:id", _loginRequered2.default, _ControleAcessoController2.default.delete);
exports. default = router;
