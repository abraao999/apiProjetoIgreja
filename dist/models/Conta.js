"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Conta extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        tipo: {
          type: _sequelize2.default.BOOLEAN,
          defaultValue: "",
          validate: {
            isBoolean: { msg: "valor precisa ser um booleano" },
          },
        },
        valor: {
          type: _sequelize2.default.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "valor invalido ",
            },
          },
        },
        data_operacao: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Data invalido ",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Caixa, { foreignKey: "conta_id" });
  }
} exports.default = Conta;
