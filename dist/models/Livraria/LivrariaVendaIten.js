"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrariaVendaIten extends _sequelize.Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.LivrariaVenda, { foreignKey: "venda_id" });
    this.belongsTo(models.LivrariaLivro, { foreignKey: "livro_id" });
  }
} exports.default = LivrariaVendaIten;
