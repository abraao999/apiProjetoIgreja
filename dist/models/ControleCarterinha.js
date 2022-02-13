"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class ControleCarterinha extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        status: {
          type: _sequelize2.default.BOOLEAN,
          defaultValue: false,
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Membro, { foreignKey: "membro_id" });
  }
} exports.default = ControleCarterinha;
