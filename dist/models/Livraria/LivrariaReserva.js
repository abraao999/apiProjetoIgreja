"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrariaReserva extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        data_reserva: {
          type: _sequelize2.default.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        nome_cliente: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo descrição deve ter entre 3 e 50 caracteres",
            },
          },
        },
        celular: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 20],
              msg: "Campo celular deve ter entre 3 e 20 caracteres",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Membro, { foreignKey: "membro_id" });
    this.belongsTo(models.LivrariaLivro, {
      foreignKey: "livro_id",
    });
  }
} exports.default = LivrariaReserva;
