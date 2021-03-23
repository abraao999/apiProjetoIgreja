"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _FunctionController = require('../controllers/FunctionController'); var _FunctionController2 = _interopRequireDefault(_FunctionController);
// import loginRequered from "../middlewares/loginRequered";

const router = new (0, _express.Router)();

router.put("/:id", _FunctionController2.default.update);
router.post("/", _FunctionController2.default.storage);
router.get("/", _FunctionController2.default.index);
router.get("/:id", _FunctionController2.default.show);
router.delete("/:id", _FunctionController2.default.delete);
exports. default = router;
