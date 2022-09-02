"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

var _database = require('../config/database'); var _database2 = _interopRequireDefault(_database);
var _Function = require('../models/configs/Function'); var _Function2 = _interopRequireDefault(_Function);
var _Cargo = require('../models/configs/Cargo'); var _Cargo2 = _interopRequireDefault(_Cargo);
var _Setor = require('../models/configs/Setor'); var _Setor2 = _interopRequireDefault(_Setor);
var _Departamento = require('../models/configs/Departamento'); var _Departamento2 = _interopRequireDefault(_Departamento);
var _Caixa = require('../models/tesouraria/Caixa'); var _Caixa2 = _interopRequireDefault(_Caixa);
var _Membro = require('../models/Membro'); var _Membro2 = _interopRequireDefault(_Membro);
var _Classe = require('../models/EBD/Classe'); var _Classe2 = _interopRequireDefault(_Classe);
var _Aluno = require('../models/EBD/Aluno'); var _Aluno2 = _interopRequireDefault(_Aluno);
var _Abatimento = require('../models/tesouraria/Abatimento'); var _Abatimento2 = _interopRequireDefault(_Abatimento);
var _Dizimo = require('../models/tesouraria/Dizimo'); var _Dizimo2 = _interopRequireDefault(_Dizimo);
var _Chamada = require('../models/EBD/Chamada'); var _Chamada2 = _interopRequireDefault(_Chamada);
var _CaixaEbd = require('../models/EBD/CaixaEbd'); var _CaixaEbd2 = _interopRequireDefault(_CaixaEbd);
var _FamiliaVisitante = require('../models/FamiliaVisitante'); var _FamiliaVisitante2 = _interopRequireDefault(_FamiliaVisitante);
var _NomeVisitantes = require('../models/NomeVisitantes'); var _NomeVisitantes2 = _interopRequireDefault(_NomeVisitantes);
var _DescLancamento = require('../models/tesouraria/DescLancamento'); var _DescLancamento2 = _interopRequireDefault(_DescLancamento);
var _Pedido = require('../models/Pedido'); var _Pedido2 = _interopRequireDefault(_Pedido);
var _ControleAcesso = require('../models/ControleAcesso'); var _ControleAcesso2 = _interopRequireDefault(_ControleAcesso);
var _ControleCarterinha = require('../models/ControleCarterinha'); var _ControleCarterinha2 = _interopRequireDefault(_ControleCarterinha);
var _TeologiaAluno = require('../models/TeologiaAluno'); var _TeologiaAluno2 = _interopRequireDefault(_TeologiaAluno);
var _TeologiaClasse = require('../models/TeologiaClasse'); var _TeologiaClasse2 = _interopRequireDefault(_TeologiaClasse);
var _TeologiaChamada = require('../models/TeologiaChamada'); var _TeologiaChamada2 = _interopRequireDefault(_TeologiaChamada);
var _TeologiaLivro = require('../models/TeologiaLivro'); var _TeologiaLivro2 = _interopRequireDefault(_TeologiaLivro);
var _LivrariaLivro = require('../models/Livraria/LivrariaLivro'); var _LivrariaLivro2 = _interopRequireDefault(_LivrariaLivro);
var _LivrariaPedido = require('../models/Livraria/LivrariaPedido'); var _LivrariaPedido2 = _interopRequireDefault(_LivrariaPedido);
var _LivrariaVenda = require('../models/Livraria/LivrariaVenda'); var _LivrariaVenda2 = _interopRequireDefault(_LivrariaVenda);
var _LivrariaVendaIten = require('../models/Livraria/LivrariaVendaIten'); var _LivrariaVendaIten2 = _interopRequireDefault(_LivrariaVendaIten);
var _LivrariaCamisetas = require('../models/Livraria/LivrariaCamisetas'); var _LivrariaCamisetas2 = _interopRequireDefault(_LivrariaCamisetas);
var _LivrariaFotos = require('../models/Livraria/LivrariaFotos'); var _LivrariaFotos2 = _interopRequireDefault(_LivrariaFotos);
var _LivrariaVendaCamiseta = require('../models/Livraria/LivrariaVendaCamiseta'); var _LivrariaVendaCamiseta2 = _interopRequireDefault(_LivrariaVendaCamiseta);
var _LivrariaVendaItenCamiseta = require('../models/Livraria/LivrariaVendaItenCamiseta'); var _LivrariaVendaItenCamiseta2 = _interopRequireDefault(_LivrariaVendaItenCamiseta);
var _LivrariaReserva = require('../models/Livraria/LivrariaReserva'); var _LivrariaReserva2 = _interopRequireDefault(_LivrariaReserva);

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
  _Chamada2.default,
  _FamiliaVisitante2.default,
  _NomeVisitantes2.default,
  _DescLancamento2.default,
  _Pedido2.default,
  _ControleAcesso2.default,
  _ControleCarterinha2.default,
  _TeologiaAluno2.default,
  _TeologiaClasse2.default,
  _TeologiaChamada2.default,
  _TeologiaLivro2.default,
  _LivrariaLivro2.default,
  _LivrariaPedido2.default,
  _LivrariaVenda2.default,
  _LivrariaVendaIten2.default,
  _LivrariaCamisetas2.default,
  _LivrariaFotos2.default,
  _LivrariaVendaCamiseta2.default,
  _LivrariaVendaItenCamiseta2.default,
  _LivrariaReserva2.default,
];
const connection = new (0, _sequelize2.default)(_database2.default);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
