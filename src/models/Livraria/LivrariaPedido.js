import Sequelize, { Model } from "sequelize";

export default class LivrariaPedido extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo descrição deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_pedido: {
          type: Sequelize.DATE,
          defaultValue: false,
          validate: {
            isDate: {
              msg: "Insira uma data de pedido valido",
            },
          },
        },
        data_pagamento: {
          type: Sequelize.DATE,
          defaultValue: false,
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
        custo: {
          type: Sequelize.FLOAT,
          defaultValue: false,
          validate: {
            isFloat: {
              msg: "Insira uma valor valido",
            },
          },
        },
        quantidade: {
          type: Sequelize.INTEGER,
          defaultValue: false,
          validate: {
            isInt: {
              msg: "Insira uma valor valido",
            },
          },
        },
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo Nome deve ter entre 3 e 16 caracteres",
            },
          },
        },
        contato: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo Nome deve ter entre 3 e 16 caracteres",
            },
          },
        },
        tipo_pagamento: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo tipo de pagamento deve ter entre 3 e 16 caracteres",
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
}
