"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class CaixaEbd extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo descrição deve ter entre 3 e 50 caracteres",
            },
          },
        },
        valor: {
          type: _sequelize2.default.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Campo descrição deve ser real ou decimal",
            },
          },
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
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: "setor_id" });
  }
} exports.default = CaixaEbd;
