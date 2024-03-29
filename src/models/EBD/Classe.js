import Sequelize, { Model } from "sequelize";

export default class Classe extends Model {
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
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: "classe_id" });
    this.hasOne(models.Setor, { foreignKey: "setor_id" });
    this.hasMany(models.LivrariaRevistas, { foreignKey: "classe_id" });
  }
}
