"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _LivrariaRevistaController = require('../../controllers/Livraria/LivrariaRevistaController'); var _LivrariaRevistaController2 = _interopRequireDefault(_LivrariaRevistaController);

const router = new (0, _express.Router)();

router.put("/:id", _LivrariaRevistaController2.default.update);
router.post("/", _LivrariaRevistaController2.default.storage);
router.get("/", _LivrariaRevistaController2.default.index);
router.get("/:id", _LivrariaRevistaController2.default.show);
router.delete("/:id", _LivrariaRevistaController2.default.delete);
exports. default = router;
