"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();
require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _expressdelay = require('express-delay'); var _expressdelay2 = _interopRequireDefault(_expressdelay);
var _funcaoRoutes = require('./routes/configs/funcaoRoutes'); var _funcaoRoutes2 = _interopRequireDefault(_funcaoRoutes);
var _cargoRoutes = require('./routes/configs/cargoRoutes'); var _cargoRoutes2 = _interopRequireDefault(_cargoRoutes);
var _setorRoutes = require('./routes/configs/setorRoutes'); var _setorRoutes2 = _interopRequireDefault(_setorRoutes);
var _departamentoRoutes = require('./routes/configs/departamentoRoutes'); var _departamentoRoutes2 = _interopRequireDefault(_departamentoRoutes);
var _caixaRoutes = require('./routes/tesouraria/caixaRoutes'); var _caixaRoutes2 = _interopRequireDefault(_caixaRoutes);
var _membroRoutes = require('./routes/membroRoutes'); var _membroRoutes2 = _interopRequireDefault(_membroRoutes);
var _classeRoutes = require('./routes/EBD/classeRoutes'); var _classeRoutes2 = _interopRequireDefault(_classeRoutes);
var _alunoRoutes = require('./routes/EBD/alunoRoutes'); var _alunoRoutes2 = _interopRequireDefault(_alunoRoutes);
var _tokemRoutes = require('./routes/tokemRoutes'); var _tokemRoutes2 = _interopRequireDefault(_tokemRoutes);
var _abatimentoRoutes = require('./routes/tesouraria/abatimentoRoutes'); var _abatimentoRoutes2 = _interopRequireDefault(_abatimentoRoutes);
var _dizimoRoutes = require('./routes/tesouraria/dizimoRoutes'); var _dizimoRoutes2 = _interopRequireDefault(_dizimoRoutes);
var _chamadaRoutes = require('./routes/EBD/chamadaRoutes'); var _chamadaRoutes2 = _interopRequireDefault(_chamadaRoutes);
var _caixaEbdRoutes = require('./routes/EBD/caixaEbdRoutes'); var _caixaEbdRoutes2 = _interopRequireDefault(_caixaEbdRoutes);
var _familiaVisitanteRoutes = require('./routes/familiaVisitanteRoutes'); var _familiaVisitanteRoutes2 = _interopRequireDefault(_familiaVisitanteRoutes);
var _nomesVisitanteRoutes = require('./routes/nomesVisitanteRoutes'); var _nomesVisitanteRoutes2 = _interopRequireDefault(_nomesVisitanteRoutes);
var _descCaixaRoutes = require('./routes/tesouraria/descCaixaRoutes'); var _descCaixaRoutes2 = _interopRequireDefault(_descCaixaRoutes);
var _pedidoRoutes = require('./routes/pedidoRoutes'); var _pedidoRoutes2 = _interopRequireDefault(_pedidoRoutes);
var _controleAcessoRoutes = require('./routes/controleAcessoRoutes'); var _controleAcessoRoutes2 = _interopRequireDefault(_controleAcessoRoutes);
var _controleCarterinhaRoutes = require('./routes/controleCarterinhaRoutes'); var _controleCarterinhaRoutes2 = _interopRequireDefault(_controleCarterinhaRoutes);
var _teologiaAlunoRoutes = require('./routes/teologiaAlunoRoutes'); var _teologiaAlunoRoutes2 = _interopRequireDefault(_teologiaAlunoRoutes);
var _correioRoutes = require('./routes/correioRoutes'); var _correioRoutes2 = _interopRequireDefault(_correioRoutes);
var _teologiaClasseRoutes = require('./routes/teologiaClasseRoutes'); var _teologiaClasseRoutes2 = _interopRequireDefault(_teologiaClasseRoutes);
var _teologiaChamadaRoutes = require('./routes/teologiaChamadaRoutes'); var _teologiaChamadaRoutes2 = _interopRequireDefault(_teologiaChamadaRoutes);
var _teologiaLivroRoutes = require('./routes/teologiaLivroRoutes'); var _teologiaLivroRoutes2 = _interopRequireDefault(_teologiaLivroRoutes);
var _livrariaLivroRoutes = require('./routes/Livraria/livrariaLivroRoutes'); var _livrariaLivroRoutes2 = _interopRequireDefault(_livrariaLivroRoutes);
var _livrariaPedidoRoutes = require('./routes/Livraria/livrariaPedidoRoutes'); var _livrariaPedidoRoutes2 = _interopRequireDefault(_livrariaPedidoRoutes);
var _livrariaVendaRoutes = require('./routes/Livraria/livrariaVendaRoutes'); var _livrariaVendaRoutes2 = _interopRequireDefault(_livrariaVendaRoutes);
var _livrariaVendaItenRoutes = require('./routes/Livraria/livrariaVendaItenRoutes'); var _livrariaVendaItenRoutes2 = _interopRequireDefault(_livrariaVendaItenRoutes);
var _livrariaCamisetaRoutes = require('./routes/Livraria/livrariaCamisetaRoutes'); var _livrariaCamisetaRoutes2 = _interopRequireDefault(_livrariaCamisetaRoutes);
var _livrariaFotosRoutes = require('./routes/Livraria/livrariaFotosRoutes'); var _livrariaFotosRoutes2 = _interopRequireDefault(_livrariaFotosRoutes);
var _livrariaVendaCamisetaRoutes = require('./routes/Livraria/livrariaVendaCamisetaRoutes'); var _livrariaVendaCamisetaRoutes2 = _interopRequireDefault(_livrariaVendaCamisetaRoutes);
var _livrariaVendaItenCamisetaRoutes = require('./routes/Livraria/livrariaVendaItenCamisetaRoutes'); var _livrariaVendaItenCamisetaRoutes2 = _interopRequireDefault(_livrariaVendaItenCamisetaRoutes);
var _livrariaReservaRoutes = require('./routes/Livraria/livrariaReservaRoutes'); var _livrariaReservaRoutes2 = _interopRequireDefault(_livrariaReservaRoutes);
var _sendEmailRoutes = require('./routes/sendEmailRoutes'); var _sendEmailRoutes2 = _interopRequireDefault(_sendEmailRoutes);

const whiteList = [
  // dados do servidor
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error("not allowed by cors"));
  },
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_express2.default.json());
    // this.app.use(cors(corsOptions));
    // this.app.use(delay(2000));
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use("/files", _express2.default.static(_path.resolve.call(void 0, __dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/funcao/", _funcaoRoutes2.default);
    this.app.use("/cargo/", _cargoRoutes2.default);
    this.app.use("/setor/", _setorRoutes2.default);
    this.app.use("/departamento/", _departamentoRoutes2.default);
    this.app.use("/caixa/", _caixaRoutes2.default);
    this.app.use("/caixaEbd/", _caixaEbdRoutes2.default);
    this.app.use("/membro/", _membroRoutes2.default);
    this.app.use("/classe/", _classeRoutes2.default);
    this.app.use("/aluno/", _alunoRoutes2.default);
    this.app.use("/tokem/", _tokemRoutes2.default);
    this.app.use("/abatimento/", _abatimentoRoutes2.default);
    this.app.use("/dizimo/", _dizimoRoutes2.default);
    this.app.use("/chamada/", _chamadaRoutes2.default);
    this.app.use("/familiaVisitante/", _familiaVisitanteRoutes2.default);
    this.app.use("/nomesVisitante/", _nomesVisitanteRoutes2.default);
    this.app.use("/descCaixa/", _descCaixaRoutes2.default);
    this.app.use("/pedido/", _pedidoRoutes2.default);
    this.app.use("/controleAcesso/", _controleAcessoRoutes2.default);
    this.app.use("/controleCarterinha/", _controleCarterinhaRoutes2.default);
    this.app.use("/teologiaAluno/", _teologiaAlunoRoutes2.default);
    this.app.use("/correio/", _correioRoutes2.default);
    this.app.use("/teologiaClasse/", _teologiaClasseRoutes2.default);
    this.app.use("/teologiaChamada/", _teologiaChamadaRoutes2.default);
    this.app.use("/teologiaLivro/", _teologiaLivroRoutes2.default);
    this.app.use("/livrariaLivro/", _livrariaLivroRoutes2.default);
    this.app.use("/livrariaPedido/", _livrariaPedidoRoutes2.default);
    this.app.use("/livrariaVenda/", _livrariaVendaRoutes2.default);
    this.app.use("/livrariaVendaIten/", _livrariaVendaItenRoutes2.default);
    this.app.use("/livrariaCamiseta/", _livrariaCamisetaRoutes2.default);
    this.app.use("/livrariaFotos/", _livrariaFotosRoutes2.default);
    this.app.use("/livrariaVendaCamiseta/", _livrariaVendaCamisetaRoutes2.default);
    this.app.use(
      "/livrariaVendaItenCamiseta/",
      _livrariaVendaItenCamisetaRoutes2.default
    );
    this.app.use("/livrariaReserva/", _livrariaReservaRoutes2.default);
    this.app.use("/livrariaReserva/", _livrariaReservaRoutes2.default);
    this.app.use("/sendEmail/", _sendEmailRoutes2.default);
  }
}
exports. default = new App().app;
