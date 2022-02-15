"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TeologiaAlunoController = require('../controllers/TeologiaAlunoController'); var _TeologiaAlunoController2 = _interopRequireDefault(_TeologiaAlunoController);
var _loginRequered = require('../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _TeologiaAlunoController2.default.update);
router.post("/", _loginRequered2.default, _TeologiaAlunoController2.default.storage);
router.get("/", _TeologiaAlunoController2.default.index);
router.get("/:id", _TeologiaAlunoController2.default.show);
router.delete("/:id", _loginRequered2.default, _TeologiaAlunoController2.default.delete);
exports. default = router;
