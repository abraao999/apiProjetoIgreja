import Sequelize, { Model } from "sequelize";

export default class Caixa extends Model {
  static init(sequelize) {
    super.init(
      {
        valor: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Campo descrição deve ser real ou decimal",
            },
          },
        },
        n_nota: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        data_operacao: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        tipo: {
          type: Sequelize.BOOLEAN,
          defaultValue: "",
        },
        investimento: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Setor, { foreignKey: "setor_id" });
    this.belongsTo(models.Departamento, { foreignKey: "departamento_id" });
    this.belongsTo(models.DescCaixa, { foreignKey: "desc_id" });
  }
}
