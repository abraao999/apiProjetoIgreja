"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ClasseController = require('../controllers/ClasseController'); var _ClasseController2 = _interopRequireDefault(_ClasseController);
// import loginRequered from "../middlewares/loginRequered";

const router = new (0, _express.Router)();

router.put("/:id", _ClasseController2.default.update);
router.post("/", _ClasseController2.default.storage);
router.get("/", _ClasseController2.default.index);
router.get("/:id", _ClasseController2.default.show);
router.delete("/:id", _ClasseController2.default.delete);
exports. default = router;
