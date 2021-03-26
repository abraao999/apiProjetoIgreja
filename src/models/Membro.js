import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class Membro extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo nome deve ter entre 3 e 100 caracteres",
            },
          },
        },
        rg: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 12],
              msg: "Campo RG deve ter entre 3 e 12 caracteres",
            },
          },
        },
        cpf: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 12],
              msg: "Campo CPF deve ter entre 3 e 12 caracteres",
            },
          },
        },
        telefone: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 20],
              msg: "Campo telefone deve ter entre 3 e 20 caracteres",
            },
          },
        },
        estado_civil: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo estado civil deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_batismo: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Campo estado civíl deve ter entre 3 e 50 caracteres",
            },
          },
        },
        profissao: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo profissão deve ter entre 3 e 50 caracteres",
            },
          },
        },
        email: {
          type: Sequelize.STRING,
          defaultValue: "",
          unique: { msg: "E-mail existente" },
          validate: {
            isEmail: {
              msg: "E-mail inválido",
            },
          },
        },
        password_hash: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        password: {
          type: Sequelize.VIRTUAL,
          defaultValue: "",
          validate: {
            len: {
              args: [5, 50],
              msg: "Campo senha deve ter entre 6 e 50 caracteres",
            },
          },
        },
        cargo_id: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo cargo deve ser um inteiro",
            },
          },
        },
        function_id: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo função deve ser um inteiro",
            },
          },
        },
        setor_id: {
          type: Sequelize.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo setor deve ser um inteiro",
            },
          },
        },
      },
      { sequelize }
    );
    this.addHook("beforeSave", async (user) => {
      if (user.password) {
        user.password_hash = await bcryptjs.hash(user.password, 8);
      }
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Caixa, { foreignKey: "departamento_id" });
    this.belongsTo(models.Setor, { foreignKey: "setor_id" });
    // this.hasOne(models.Setor, { foreignKey: "setor_id" });
  }
}
