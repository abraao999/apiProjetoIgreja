"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ControleCarterinhaController = require('../controllers/ControleCarterinhaController'); var _ControleCarterinhaController2 = _interopRequireDefault(_ControleCarterinhaController);
var _loginRequered = require('../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _loginRequered2.default, _ControleCarterinhaController2.default.update);
router.post("/", _ControleCarterinhaController2.default.storage);
router.get("/", _ControleCarterinhaController2.default.index);
router.get("/:id", _ControleCarterinhaController2.default.show);
router.get("/getEntregues/:id", _ControleCarterinhaController2.default.getEntregues);
router.delete("/:id", _loginRequered2.default, _ControleCarterinhaController2.default.delete);
exports. default = router;
