import Sequelize, { Model } from "sequelize";

export default class TeologiaLivro extends Model {
  static init(sequelize) {
    super.init(
      {
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
        data_operacao: {
          type: Sequelize.DATE,
          defaultValue: false,
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
    this.belongsTo(models.TeologiaAluno, { foreignKey: "aluno_id" });
  }
}
