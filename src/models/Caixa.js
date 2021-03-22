import Sequelize, { Model } from "sequelize";

export default class Caixa extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Conta, { foreignKey: "conta_id" });
    this.belongsTo(models.Departamento, { foreignKey: "departamento_id" });
  }
}
