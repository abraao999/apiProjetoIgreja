"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CaixaEbdController = require('../../controllers/EBD/CaixaEbdController'); var _CaixaEbdController2 = _interopRequireDefault(_CaixaEbdController);
var _loginRequered = require('../../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _CaixaEbdController2.default.update);
router.post("/", _loginRequered2.default, _CaixaEbdController2.default.storage);
router.get("/", _CaixaEbdController2.default.index);
router.get("/maxId", _CaixaEbdController2.default.maxId);
router.get("/:id", _CaixaEbdController2.default.show);
router.delete("/:id", _loginRequered2.default, _CaixaEbdController2.default.delete);
exports. default = router;
