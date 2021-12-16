import Sequelize, { Model } from "sequelize";

export default class Pedido extends Model {
  static init(sequelize) {
    super.init(
      {
        solicitante: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo solicitante deve ter entre 3 e 50 caracteres",
            },
          },
        },
        favorecido: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo favorecido deve ter entre 3 e 50 caracteres",
            },
          },
        },
        pedido: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo pedido deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_culto: {
          type: Sequelize.DATE,
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
}
