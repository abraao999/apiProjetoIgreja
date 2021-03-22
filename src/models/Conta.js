import Sequelize, { Model } from "sequelize";

export default class Conta extends Model {
  static init(sequelize) {
    super.init(
      {
        tipo: {
          type: Sequelize.BOOLEAN,
          defaultValue: "",
          validate: {
            isBoolean: { msg: "valor precisa ser um booleano" },
          },
        },
        valor: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "valor invalido ",
            },
          },
        },
        data_operacao: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Data invalido ",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Caixa, { foreignKey: "conta_id" });
  }
}
