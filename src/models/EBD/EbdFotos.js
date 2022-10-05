import Sequelize, { Model } from "sequelize";

export default class EbdFoto extends Model {
  static init(sequelize) {
    super.init(
      {
        url: {
          type: Sequelize.STRING,
          defaultValue: null,
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: "foto_id" });
    // this.belongsTo(models.LivrariaVendaIten, { foreignKey: "livro_id" });
  }
}
