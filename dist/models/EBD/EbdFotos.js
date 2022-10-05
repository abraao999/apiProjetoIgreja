"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class EbdFoto extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        url: {
          type: _sequelize2.default.STRING,
          defaultValue: null,
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: "foto_id" });
    // this.belongsTo(models.LivrariaVendaIten, { foreignKey: "livro_id" });
  }
} exports.default = EbdFoto;
