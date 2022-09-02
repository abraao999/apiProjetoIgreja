"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _LivrariaReservaController = require('../../controllers/Livraria/LivrariaReservaController'); var _LivrariaReservaController2 = _interopRequireDefault(_LivrariaReservaController);

const router = new (0, _express.Router)();

router.put("/:id", _LivrariaReservaController2.default.update);
router.post("/", _LivrariaReservaController2.default.storage);
router.get("/", _LivrariaReservaController2.default.index);
router.get("/:id", _LivrariaReservaController2.default.show);
router.delete("/:id", _LivrariaReservaController2.default.delete);
exports. default = router;
