import Sequelize, { Model } from "sequelize";

export default class Chamada extends Model {
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
    this.hasMany(models.Aluno, { foreignKey: "aluno_id" });
  }
}
