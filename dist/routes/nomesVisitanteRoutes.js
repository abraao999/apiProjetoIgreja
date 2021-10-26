"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _NomeVisitanteController = require('../controllers/NomeVisitanteController'); var _NomeVisitanteController2 = _interopRequireDefault(_NomeVisitanteController);
var _loginRequered = require('../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _NomeVisitanteController2.default.update);
router.post("/", _NomeVisitanteController2.default.storage);
router.get("/", _NomeVisitanteController2.default.index);
router.get("/:id", _NomeVisitanteController2.default.show);
router.get("/getNomes/:id", _NomeVisitanteController2.default.getNomes);
router.delete("/:id", _NomeVisitanteController2.default.delete);
exports. default = router;
