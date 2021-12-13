"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Caixa extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        valor: {
          type: _sequelize2.default.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Campo descrição deve ser real ou decimal",
            },
          },
        },
        n_nota: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        data_operacao: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        tipo: {
          type: _sequelize2.default.BOOLEAN,
          defaultValue: "",
        },
        investimento: {
          type: _sequelize2.default.BOOLEAN,
          defaultValue: "",
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: "setor_id" });
    this.belongsTo(models.Departamento, { foreignKey: "departamento_id" });
    this.belongsTo(models.DescCaixa, { foreignKey: "desc_id" });
  }
} exports.default = Caixa;
