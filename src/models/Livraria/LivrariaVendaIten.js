import Sequelize, { Model } from "sequelize";

export default class LivrariaVendaIten extends Model {
  static init(sequelize) {
    super.init({}, { sequelize });
    return this;
  }

  static associate(models) {
    this.belongsTo(models.LivrariaVenda, { foreignKey: "venda_id" });
    this.belongsTo(models.LivrariaLivro, { foreignKey: "livro_id" });
  }
}
