"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CorreioController = require('../controllers/CorreioController'); var _CorreioController2 = _interopRequireDefault(_CorreioController);

const router = new (0, _express.Router)();

router.post("/", _CorreioController2.default.buscaCep);

exports. default = router;
