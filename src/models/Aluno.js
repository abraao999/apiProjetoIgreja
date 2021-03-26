import Sequelize, { Model } from "sequelize";

export default class Aluno extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Classe, { foreignKey: "classe_id" });
    this.belongsTo(models.Membro, { foreignKey: "membro_id" });
  }
}
