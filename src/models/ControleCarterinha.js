import Sequelize, { Model } from "sequelize";

export default class ControleCarterinha extends Model {
  static init(sequelize) {
    super.init(
      {
        status: {
          type: Sequelize.BOOLEAN,
          defaultValue: false,
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Membro, { foreignKey: "membro_id" });
  }
}
