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
import FamiliaVisitante from "../models/FamiliaVisitante";
import NomesVisitante from "../models/NomeVisitantes";
import DescLancamento from "../models/DescLancamento";
import Pedido from "../models/Pedido";

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
  Chamada,
  FamiliaVisitante,
  NomesVisitante,
  DescLancamento,
  Pedido,
];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
