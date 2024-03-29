import Sequelize, { Model } from "sequelize";

export default class LivrariaLivro extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo descrição deve ter entre 3 e 100 caracteres",
            },
          },
        },
        data_entrada: {
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
        autor: {
          type: Sequelize.STRING,
          defaultValue: false,
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.LivrariaVendaIten, { foreignKey: "livro_id" });
    this.hasMany(models.LivrariaReserva, { foreignKey: "livro_id" });
    this.belongsTo(models.LivrariaFoto, { foreignKey: "foto_id" });
  }
}
