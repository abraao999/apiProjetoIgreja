import Sequelize, { Model } from "sequelize";

export default class ControleAcesso extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Membro, { foreignKey: "membro_id" });
    this.belongsTo(models.Function, { foreignKey: "function_id" });
  }
}
