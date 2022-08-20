"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrariaPedido extends _sequelize.Model {
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
        data_pedido: {
          type: _sequelize2.default.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "Insira uma data de pedido valido",
            },
          },
        },
        data_pagamento: {
          type: _sequelize2.default.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "Insira uma data validas",
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
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 255],
              msg: "Campo Nome deve ter entre 3 e 255 caracteres",
            },
          },
        },
        contato: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo Nome deve ter entre 3 e 16 caracteres",
            },
          },
        },
        tipo_pagamento: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo tipo de pagamento deve ter entre 3 e 16 caracteres",
            },
          },
        },
        status: {
          type: _sequelize2.default.STRING,
          defaultValue: null,
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo status deve ter entre 3 e 16 caracteres",
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
  }
} exports.default = LivrariaPedido;
