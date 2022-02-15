import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class TeologiaClasse extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo nome deve ter entre 3 e 100 caracteres",
            },
          },
        },
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.TeologiaAluno, { foreignKey: "classe_id" });
  }
}
