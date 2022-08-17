import Sequelize, { Model } from "sequelize";

export default class Departamento extends Model {
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
    this.hasMany(models.Caixa, { foreignKey: "departamento_id" });
    this.belongsTo(models.Setor, { foreignKey: "setor_id" });
  }
}
