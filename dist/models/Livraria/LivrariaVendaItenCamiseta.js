"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrariaVendaItenCamisetas extends _sequelize.Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.LivrariaVendaCamisetas, { foreignKey: "venda_id" });
    this.belongsTo(models.LivrariaCamisetas, { foreignKey: "camiseta_id" });
  }
} exports.default = LivrariaVendaItenCamisetas;
