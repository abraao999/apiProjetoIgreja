"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Setor extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        descricao: {
          type: _sequelize2.default.STRING,
          defaultValue: "",
          validate: {
            len: {
              args: [3, 50],
              msg: "Campo descrição deve ter entre 3 e 50 caracteres",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Departamento, { foreignKey: "setor_id" });
    this.hasMany(models.Caixa, { foreignKey: "setor_id" });
    this.hasMany(models.CaixaEbd, { foreignKey: "setor_id" });
    this.hasMany(models.Aluno, { foreignKey: "setor_id" });
    this.hasMany(models.Classe, { foreignKey: "setor_id" });
    this.hasMany(models.LivrariaRevistas, { foreignKey: "setor_id" });
  }
} exports.default = Setor;
