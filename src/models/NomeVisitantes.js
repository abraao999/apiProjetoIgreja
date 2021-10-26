import Sequelize, { Model } from "sequelize";

export default class NomesVisitante extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
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
    this.belongsTo(models.FamiliaVisitante, { foreignKey: "familia_id" });
  }
}
