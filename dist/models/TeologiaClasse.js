"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class TeologiaClasse extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 100],
              msg: "Campo nome deve ter entre 3 e 100 caracteres",
            },
          },
        },
      },
      { sequelize }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.TeologiaAluno, { foreignKey: "classe_id" });
  }
} exports.default = TeologiaClasse;
