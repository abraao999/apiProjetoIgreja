import Sequelize from "sequelize";

import databaseConfig from "../config/database";
import Function from "../models/Function";
import Cargo from "../models/Cargo";
import Setor from "../models/Setor";
import Departamento from "../models/Departamento";
import Caixa from "../models/Caixa";
import Membro from "../models/Membro";
import Classe from "../models/Classe";
import Aluno from "../models/Aluno";
import Abatimento from "../models/Abatimento";
import Dizimo from "../models/Dizimo";
import Chamada from "../models/Chamada";
import CaixaEbd from "../models/CaixaEbd";

const models = [
  Function,
  Cargo,
  Setor,
  Departamento,
  Caixa,
  CaixaEbd,
  Membro,
  Classe,
  Aluno,
  Abatimento,
  Dizimo,
  Chamada
];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
