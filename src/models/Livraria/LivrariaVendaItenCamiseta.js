import Sequelize, { Model } from "sequelize";

export default class LivrariaVendaItenCamisetas extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.LivrariaVendaCamisetas, { foreignKey: "venda_id" });
    this.belongsTo(models.LivrariaCamisetas, { foreignKey: "camiseta_id" });
  }
}
