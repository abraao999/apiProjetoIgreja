"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Pedido extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        solicitante: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo solicitante deve ter entre 3 e 50 caracteres",
            },
          },
        },
        favorecido: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo favorecido deve ter entre 3 e 50 caracteres",
            },
          },
        },
        pedido: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo pedido deve ter entre 3 e 50 caracteres",
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
} exports.default = Pedido;
