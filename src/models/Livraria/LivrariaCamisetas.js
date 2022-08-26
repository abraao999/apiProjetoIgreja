import Sequelize, { Model } from "sequelize";

export default class LivrariaCamisetas extends Model {
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
        tamanho: {
          type: Sequelize.STRING,
          defaultValue: "",
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
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.LivrariaVendaItenCamisetas, {
      foreignKey: "camiseta_id",
    });
  }
}
