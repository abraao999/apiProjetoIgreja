"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrariaFoto extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: _sequelize2.default.STRING,
          defaultValue: null,
        },
        size: {
          type: _sequelize2.default.FLOAT,
          defaultValue: null,
        },
        key: {
          type: _sequelize2.default.STRING,
          defaultValue: null,
        },
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
    this.hasMany(models.LivrariaLivro, { foreignKey: "foto_id" });
    // this.belongsTo(models.LivrariaVendaIten, { foreignKey: "livro_id" });
  }
} exports.default = LivrariaFoto;
