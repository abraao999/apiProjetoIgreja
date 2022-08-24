"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrariaLivro extends _sequelize.Model {
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
        data_entrada: {
          type: _sequelize2.default.DATE,
          defaultValue: false,
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        valor: {
          type: _sequelize2.default.FLOAT,
          defaultValue: false,
          validate: {
            isFloat: {
              msg: "Insira uma valor valido",
            },
          },
        },
        custo: {
          type: _sequelize2.default.FLOAT,
          defaultValue: false,
          validate: {
            isFloat: {
              msg: "Insira uma valor valido",
            },
          },
        },
        quantidade: {
          type: _sequelize2.default.INTEGER,
          defaultValue: false,
          validate: {
            isInt: {
              msg: "Insira uma valor valido",
            },
          },
        },
        autor: {
          type: _sequelize2.default.STRING,
          defaultValue: false,
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.LivrariaVendaIten, { foreignKey: "livro_id" });
    this.belongsTo(models.LivrariaFoto, { foreignKey: "foto_id" });
  }
} exports.default = LivrariaLivro;
