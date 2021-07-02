import Sequelize, { Model } from "sequelize";

export default class Setor extends Model {
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
    this.hasMany(models.Departamento, { foreignKey: "setor_id" });
    this.hasMany(models.Caixa, { foreignKey: "setor_id" });
    this.hasMany(models.Aluno, { foreignKey: "setor_id" });
    this.hasMany(models.Classe, { foreignKey: "setor_id" });
  }
}
