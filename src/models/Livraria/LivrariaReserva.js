import Sequelize, { Model } from "sequelize";

export default class LivrariaReserva extends Model {
  static init(sequelize) {
    super.init(
      {
        data_reserva: {
          type: Sequelize.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "Insira uma data validas",
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
        celular: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 20],
              msg: "Campo celular deve ter entre 3 e 20 caracteres",
            },
          },
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.LivrariaLivro, {
      foreignKey: "livro_id",
    });
  }
}
