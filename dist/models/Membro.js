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
              args: [3, 12],
              msg: "Campo RG deve ter entre 3 e 12 caracteres",
            },
          },
        },
        telefone: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 20],
              msg: "Campo descrição deve ter entre 3 e 20 caracteres",
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
              msg: "Campo estado civíl deve ter entre 3 e 50 caracteres",
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
        cargo_id: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo cargo deve ser um inteiro",
            },
          },
        },
        function_id: {
          type: _sequelize2.default.INTEGER,
          defaultValue: "",
          validate: {
            isInt: {
              msg: "Campo função deve ser um inteiro",
            },
          },
        },
        setor_id: {
          type: _sequelize2.default.INTEGER,
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
        user.password_hash = await _bcryptjs2.default.hash(user.password, 8);
      }
    });
    return this;
  }

  static associate(models) {
    this.hasMany(models.Caixa, { foreignKey: "departamento_id" });
    this.belongsTo(models.Setor, { foreignKey: "setor_id" });
  }
} exports.default = Membro;
