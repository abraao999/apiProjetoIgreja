"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _FamiliaVisitanteController = require('../controllers/FamiliaVisitanteController'); var _FamiliaVisitanteController2 = _interopRequireDefault(_FamiliaVisitanteController);
var _loginRequered = require('../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _FamiliaVisitanteController2.default.update);
router.post("/", _FamiliaVisitanteController2.default.storage);
router.get("/", _FamiliaVisitanteController2.default.index);
router.get("/:id", _FamiliaVisitanteController2.default.show);
router.delete("/:id", _FamiliaVisitanteController2.default.delete);
exports. default = router;
