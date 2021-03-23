"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ContaController = require('../controllers/ContaController'); var _ContaController2 = _interopRequireDefault(_ContaController);
// import loginRequered from "../middlewares/loginRequered";

const router = new (0, _express.Router)();

router.put("/:id", _ContaController2.default.update);
router.post("/", _ContaController2.default.storage);
router.get("/", _ContaController2.default.index);
router.get("/:id", _ContaController2.default.show);
router.delete("/:id", _ContaController2.default.delete);
exports. default = router;
