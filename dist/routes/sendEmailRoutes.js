"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SendMailController = require('../controllers/SendMailController'); var _SendMailController2 = _interopRequireDefault(_SendMailController);

const router = new (0, _express.Router)();

router.post('/', _SendMailController2.default.sendMail);
exports. default = router;
