"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class LivrariaVendaCamisetas extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        data_venda: {
          type: _sequelize2.default.DATE,
          defaultValue: null,
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
        tipo_pagamento: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo descrição deve ter entre 3 e 50 caracteres",
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
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Membro, { foreignKey: "membro_id" });
    this.hasMany(models.LivrariaVendaItenCamisetas, {
      foreignKey: "venda_id",
    });
  }
} exports.default = LivrariaVendaCamisetas;
