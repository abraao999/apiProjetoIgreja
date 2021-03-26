"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CaixaController = require('../controllers/CaixaController'); var _CaixaController2 = _interopRequireDefault(_CaixaController);
// import loginRequered from "../middlewares/loginRequered";

const router = new (0, _express.Router)();

router.put("/:id", _CaixaController2.default.update);
router.post("/", _CaixaController2.default.storage);
router.get("/", _CaixaController2.default.index);
router.get("/:id", _CaixaController2.default.show);
router.delete("/:id", _CaixaController2.default.delete);
exports. default = router;
