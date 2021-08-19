"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Function = require('../models/Function'); var _Function2 = _interopRequireDefault(_Function);
var _Cargo = require('../models/Cargo'); var _Cargo2 = _interopRequireDefault(_Cargo);
var _Setor = require('../models/Setor'); var _Setor2 = _interopRequireDefault(_Setor);
var _Departamento = require('../models/Departamento'); var _Departamento2 = _interopRequireDefault(_Departamento);
var _Caixa = require('../models/Caixa'); var _Caixa2 = _interopRequireDefault(_Caixa);
var _Membro = require('../models/Membro'); var _Membro2 = _interopRequireDefault(_Membro);
var _Classe = require('../models/Classe'); var _Classe2 = _interopRequireDefault(_Classe);
var _Aluno = require('../models/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Abatimento = require('../models/Abatimento'); var _Abatimento2 = _interopRequireDefault(_Abatimento);
var _Dizimo = require('../models/Dizimo'); var _Dizimo2 = _interopRequireDefault(_Dizimo);
var _Chamada = require('../models/Chamada'); var _Chamada2 = _interopRequireDefault(_Chamada);
var _CaixaEbd = require('../models/CaixaEbd'); var _CaixaEbd2 = _interopRequireDefault(_CaixaEbd);

const models = [
  _Function2.default,
  _Cargo2.default,
  _Setor2.default,
  _Departamento2.default,
  _Caixa2.default,
  _CaixaEbd2.default,
  _Membro2.default,
  _Classe2.default,
  _Aluno2.default,
  _Abatimento2.default,
  _Dizimo2.default,
  _Chamada2.default
];
const connection = new (0, _sequelize2.default)(_database2.default);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
