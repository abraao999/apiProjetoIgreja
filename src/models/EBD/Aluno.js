import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo nome deve ter entre 3 e 50 caracteres",
            },
          },
        },
        cpf: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo CPF deve ter entre 3 e 16 caracteres",
            },
          },
        },
        telefone: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo descrição deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_aniversario: {
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
    this.hasMany(models.Chamada, { foreignKey: "aluno_id" });
    this.hasOne(models.Setor, { foreignKey: "setor_id" });
    this.hasOne(models.Classe, { foreignKey: "classe_id" });
    this.belongsTo(models.EbdFoto, { foreignKey: "foto_id" });
  }
}
