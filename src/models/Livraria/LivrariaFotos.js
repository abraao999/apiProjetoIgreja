import Sequelize, { Model } from "sequelize";

export default class LivrariaFoto extends Model {
  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          defaultValue: null,
        },
        size: {
          type: Sequelize.FLOAT,
          defaultValue: null,
        },
        key: {
          type: Sequelize.STRING,
          defaultValue: null,
        },
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
    // this.belongsTo(models.Membro, { foreignKey: "membro_id" });
    // this.belongsTo(models.LivrariaVendaIten, { foreignKey: "livro_id" });
  }
}
