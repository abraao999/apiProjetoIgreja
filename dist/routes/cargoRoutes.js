"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _CargoController = require('../controllers/CargoController'); var _CargoController2 = _interopRequireDefault(_CargoController);
// import loginRequered from "../middlewares/loginRequered";

const router = new (0, _express.Router)();

router.put("/:id", _CargoController2.default.update);
router.post("/", _CargoController2.default.storage);
router.get("/", _CargoController2.default.index);
router.get("/:id", _CargoController2.default.show);
router.delete("/:id", _CargoController2.default.delete);
exports. default = router;
