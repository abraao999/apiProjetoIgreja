import Sequelize, { Model } from "sequelize";

export default class TeologiaChamada extends Model {
  static init(sequelize) {
    super.init(
      {
        data_aula: {
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
    this.hasOne(models.TeologiaAluno, { foreignKey: "aluno_id" });
  }
}
