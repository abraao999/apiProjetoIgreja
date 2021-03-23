"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _SetorController = require('../controllers/SetorController'); var _SetorController2 = _interopRequireDefault(_SetorController);
// import loginRequered from "../middlewares/loginRequered";

const router = new (0, _express.Router)();

router.put("/:id", _SetorController2.default.update);
router.post("/", _SetorController2.default.storage);
router.get("/", _SetorController2.default.index);
router.get("/:id", _SetorController2.default.show);
router.delete("/:id", _SetorController2.default.delete);
exports. default = router;
