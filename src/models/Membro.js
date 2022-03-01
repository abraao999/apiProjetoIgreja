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
              args: [3, 16],
              msg: "Campo CPF deve ter entre 3 e 16 caracteres",
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
              msg: "Insita uma data valida",
            },
          },
        },
        data_nascimento: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insita uma data valida",
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
        nome_conjuge: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo profissão deve ter entre 3 e 50 caracteres",
            },
          },
        },
        observacao: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        rua: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo rua deve ter entre 3 e 100 caracteres",
            },
          },
        },
        numero: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [1, 6],
              msg: "Campo numero deve ter entre 1 e 6 caracteres",
            },
          },
        },
        complemento: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        bairro: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo bairro deve ter entre 3 e 50 caracteres",
            },
          },
        },
        cidade: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo cidade deve ter entre 3 e 50 caracteres",
            },
          },
        },
        cep: {
          type: Sequelize.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 10],
              msg: "Campo CEP deve ter entre 3 e 10 caracteres",
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
    this.hasMany(models.Dizimo, { foreignKey: "membro_id" });
    this.hasMany(models.ControleAcesso, { foreignKey: "membro_id" });
    this.hasMany(models.ControleCarterinha, { foreignKey: "membro_id" });
    this.belongsTo(models.Setor, { foreignKey: "setor_id" });
  }

  passwordIsValid(password) {
    return bcryptjs.compare(password, this.password_hash);
  }
}
