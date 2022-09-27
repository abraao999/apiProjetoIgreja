import Sequelize, { Model } from "sequelize";

export default class LivrariaRevistas extends Model {
  static init(sequelize) {
    super.init(
      {
        data_pedido: {
          type: Sequelize.DATE,
          defaultValue: null,
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
        tipo: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo tipo deve ter entre 3 e 50 caracteres",
            },
          },
        },
        quantidade: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo quantidade deve ser um numeral",
            },
          },
        },
        status: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo status deve ter entre 3 e 50 caracteres",
            },
          },
        },
        ano: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo ano deve ser um numeral",
            },
          },
        },
        trimestre: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo status trimestre ter entre 3 e 50 caracteres",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Setor, {
      foreignKey: "setor_id",
    });
    this.belongsTo(models.Classe, {
      foreignKey: "classe_id",
    });
  }
}
