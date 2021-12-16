import Sequelize, { Model } from "sequelize";

export default class FamiliaVisitante extends Model {
  static init(sequelize) {
    super.init(
      {
        crente: {
          type: Sequelize.BOOLEAN,
          defaultValue: "",
        },
        observacao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo observação deve ter entre 3 e 50 caracteres",
            },
          },
        },
        igreja: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo igreja deve ter entre 3 e 50 caracteres",
            },
          },
        },
        telefone: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo telefone deve ter entre 3 e 50 caracteres",
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

  static associate(models) {
    this.hasMany(models.NomesVisitante, { foreignKey: "familia_id" });
  }
}
