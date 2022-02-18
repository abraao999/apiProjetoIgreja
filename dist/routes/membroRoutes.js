"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _MembroController = require('../controllers/MembroController'); var _MembroController2 = _interopRequireDefault(_MembroController);
var _loginRequered = require('../middlewares/loginRequered'); var _loginRequered2 = _interopRequireDefault(_loginRequered);

const router = new (0, _express.Router)();

router.put("/:id", _MembroController2.default.update);
router.post("/", _MembroController2.default.storage);
router.get("/", _MembroController2.default.index);
router.get("/maxId", _MembroController2.default.maxId);
router.get("/:id", _MembroController2.default.show);
router.delete("/:id", _loginRequered2.default, _MembroController2.default.delete);
exports. default = router;
