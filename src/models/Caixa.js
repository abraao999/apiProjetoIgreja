import Sequelize, { Model } from "sequelize";

export default class Caixa extends Model {
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
        valor: {
          type: Sequelize.FLOAT,
          defaultValue: "",
          validate: {
            isFloat: {
              msg: "Campo descrição deve ser real ou decimal",
            },
          },
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
          type: Sequelize.BOOLEAN,
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
  }
}
