"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class Membro extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo nome deve ter entre 3 e 100 caracteres",
            },
          },
        },
        rg: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 30],
              msg: "Campo RG deve ter entre 3 e 12 caracteres",
            },
          },
        },
        cpf: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 16],
              msg: "Campo CPF deve ter entre 3 e 16 caractere",
            },
          },
        },
        telefone: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 20],
              msg: "Campo telefone deve ter entre 3 e 20 caracteres",
            },
          },
        },
        estado_civil: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo estado civil deve ter entre 3 e 50 caracteres",
            },
          },
        },
        data_batismo: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insita uma data valida",
            },
          },
        },
        data_nascimento: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insita uma data valida",
            },
          },
        },
        profissao: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo profissão deve ter entre 3 e 50 caracteres",
            },
          },
        },
        nome_conjuge: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        observacao: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        rua: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo rua deve ter entre 3 e 100 caracteres",
            },
          },
        },
        numero: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        complemento: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        bairro: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        cidade: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo cidade deve ter entre 3 e 50 caracteres",
            },
          },
        },
        cep: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 10],
              msg: "Campo CEP deve ter entre 3 e 10 caracteres",
            },
          },
        },
        email: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          unique: { msg: "E-mail existente" },
          validate: {
            isEmail: {
              msg: "E-mail inválido",
            },
          },
        },
        password_hash: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
        },
        password: {
          type: _sequelize2.default.VIRTUAL,
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Caixa, { foreignKey: "departamento_id" });
    this.hasMany(models.Dizimo, { foreignKey: "membro_id" });
    this.hasMany(models.ControleAcesso, { foreignKey: "membro_id" });
    this.hasMany(models.ControleCarterinha, { foreignKey: "membro_id" });
    this.hasMany(models.LivrariaVenda, { foreignKey: "membro_id" });
    this.belongsTo(models.Cargo, { foreignKey: "cargo_id" });
    this.belongsTo(models.Setor, { foreignKey: "setor_id" });
  }

  passwordIsValid(password) {
    return _bcryptjs2.default.compare(password, this.password_hash);
  }
} exports.default = Membro;
