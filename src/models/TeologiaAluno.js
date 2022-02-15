import Sequelize, { Model } from "sequelize";
import bcryptjs from "bcryptjs";

export default class TeologiaAluno extends Model {
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
        data_nascimento: {
          type: Sequelize.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insita uma data valida",
            },
          },
        },

        cidade_nascimento: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        estado_nascimento: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        nome_mae: {
          type: Sequelize.STRING,
          defaultValue: "",
        },
        escolaridade: {
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
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.TeologiaClasse, { foreignKey: "classe_id" });
  }
}
