import Sequelize from "sequelize";

import databaseConfig from "../config/database";
import Function from "../models/Function";
import Cargo from "../models/Cargo";
import Setor from "../models/Setor";
import Departamento from "../models/Departamento";
import Conta from "../models/Conta";
import Caixa from "../models/Caixa";
import Membro from "../models/Membro";
import Classe from "../models/Classe";

const models = [
  Function,
  Cargo,
  Setor,
  Departamento,
  Conta,
  Caixa,
  Membro,
  Classe,
];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
