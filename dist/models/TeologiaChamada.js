"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class TeologiaChamada extends _sequelize.Model {
  static init(sequelize) {
    super.init(
      {
        data_aula: {
          type: _sequelize2.default.DATE,
          defaultValue: "",
          validate: {
            isDate: {
              msg: "Insira uma data validas",
            },
          },
        },
      },
      { sequelize }
    );
    return this;
  }

  static associate(models) {
    this.hasOne(models.TeologiaAluno, { foreignKey: "aluno_id" });
  }
} exports.default = TeologiaChamada;
