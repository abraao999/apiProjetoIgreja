import Sequelize, { Model } from "sequelize";

export default class LivrariaVenda extends Model {
  static init(sequelize) {
    super.init(
      {
        data_venda: {
          type: Sequelize.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        valor: {
          type: Sequelize.FLOAT,
          defaultValue: false,
          validate: {
            isFloat: {
              msg: "Insira uma valor valido",
            },
          },
        },
        tipo_pagamento: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo descrição deve ter entre 3 e 50 caracteres",
            },
          },
        },
        nome_cliente: {
          type: Sequelize.STRING,
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
    this.belongsTo(models.LivrariaVendaIten, { foreignKey: "livro_id" });
  }
}
