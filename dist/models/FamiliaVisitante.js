"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class FamiliaVisitante extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        crente: {
          type: _sequelize2.default.BOOLEAN,
          defaultValue: "",
        },
        observacao: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo observação deve ter entre 3 e 50 caracteres",
            },
          },
        },
        igreja: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo igreja deve ter entre 3 e 50 caracteres",
            },
          },
        },
        telefone: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo telefone deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_culto: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.NomesVisitante, { foreignKey: "familia_id" });
  }
} exports.default = FamiliaVisitante;
