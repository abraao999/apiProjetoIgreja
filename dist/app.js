"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _path = require('path');

_dotenv2.default.config();
require('./database');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _helmet = require('helmet'); var _helmet2 = _interopRequireDefault(_helmet);
var _funcaoRoutes = require('./routes/funcaoRoutes'); var _funcaoRoutes2 = _interopRequireDefault(_funcaoRoutes);
var _cargoRoutes = require('./routes/cargoRoutes'); var _cargoRoutes2 = _interopRequireDefault(_cargoRoutes);
var _setorRoutes = require('./routes/setorRoutes'); var _setorRoutes2 = _interopRequireDefault(_setorRoutes);
var _departamentoRoutes = require('./routes/departamentoRoutes'); var _departamentoRoutes2 = _interopRequireDefault(_departamentoRoutes);
var _contaRoutes = require('./routes/contaRoutes'); var _contaRoutes2 = _interopRequireDefault(_contaRoutes);
var _caixaRoutes = require('./routes/caixaRoutes'); var _caixaRoutes2 = _interopRequireDefault(_caixaRoutes);
var _membroRoutes = require('./routes/membroRoutes'); var _membroRoutes2 = _interopRequireDefault(_membroRoutes);
var _classeRoutes = require('./routes/classeRoutes'); var _classeRoutes2 = _interopRequireDefault(_classeRoutes);

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
    this.app.use(_cors2.default.call(void 0, ));
    this.app.use(_helmet2.default.call(void 0, ));
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/funcao/", _funcaoRoutes2.default);
    this.app.use("/cargo/", _cargoRoutes2.default);
    this.app.use("/setor/", _setorRoutes2.default);
    this.app.use("/departamento/", _departamentoRoutes2.default);
    this.app.use("/conta/", _contaRoutes2.default);
    this.app.use("/caixa/", _caixaRoutes2.default);
    this.app.use("/membro/", _membroRoutes2.default);
    this.app.use("/classe/", _classeRoutes2.default);
  }
}
exports. default = new App().app;
