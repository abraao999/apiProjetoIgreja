"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrariaRevistas extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        data_pedido: {
          type: _sequelize2.default.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        tipo: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo tipo deve ter entre 3 e 50 caracteres",
            },
          },
        },
        quantidade: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo quantidade deve ser um numeral",
            },
          },
        },
        status: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo status deve ter entre 3 e 50 caracteres",
            },
          },
        },
        ano: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo ano deve ser um numeral",
            },
          },
        },
        trimestre: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo status trimestre ter entre 3 e 50 caracteres",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Setor, {
      foreignKey: "setor_id",
    });
    this.belongsTo(models.Classe, {
      foreignKey: "classe_id",
    });
  }
} exports.default = LivrariaRevistas;
