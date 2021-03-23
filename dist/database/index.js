"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Function = require('../models/Function'); var _Function2 = _interopRequireDefault(_Function);
var _Cargo = require('../models/Cargo'); var _Cargo2 = _interopRequireDefault(_Cargo);
var _Setor = require('../models/Setor'); var _Setor2 = _interopRequireDefault(_Setor);
var _Departamento = require('../models/Departamento'); var _Departamento2 = _interopRequireDefault(_Departamento);
var _Conta = require('../models/Conta'); var _Conta2 = _interopRequireDefault(_Conta);
var _Caixa = require('../models/Caixa'); var _Caixa2 = _interopRequireDefault(_Caixa);

const models = [_Function2.default, _Cargo2.default, _Setor2.default, _Departamento2.default, _Conta2.default, _Caixa2.default];
const connection = new (0, _sequelize2.default)(_database2.default);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
