import Sequelize from "sequelize";

import databaseConfig from "../config/database";
import Function from "../models/configs/Function";
import Cargo from "../models/configs/Cargo";
import Setor from "../models/configs/Setor";
import Departamento from "../models/configs/Departamento";
import Caixa from "../models/Caixa";
import Membro from "../models/Membro";
import Classe from "../models/EBD/Classe";
import Aluno from "../models/EBD/Aluno";
import Abatimento from "../models/Abatimento";
import Dizimo from "../models/Dizimo";
import Chamada from "../models/EBD/Chamada";
import CaixaEbd from "../models/EBD/CaixaEbd";
import FamiliaVisitante from "../models/FamiliaVisitante";
import NomesVisitante from "../models/NomeVisitantes";
import DescLancamento from "../models/DescLancamento";
import Pedido from "../models/Pedido";
import ControleAcesso from "../models/ControleAcesso";
import ControleCarterinha from "../models/ControleCarterinha";
import TeologiaAluno from "../models/TeologiaAluno";
import TeologiaClasse from "../models/TeologiaClasse";
import TeologiaChamada from "../models/TeologiaChamada";
import TeologiaLivro from "../models/TeologiaLivro";
import LivrariaLivro from "../models/Livraria/LivrariaLivro";
import LivrariaPedido from "../models/Livraria/LivrariaPedido";
import LivrariaVenda from "../models/Livraria/LivrariaVenda";
import LivrariaVendaIten from "../models/Livraria/LivrariaVendaIten";
import LivrariaCamisetas from "../models/Livraria/LivrariaCamisetas";

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
  ControleAcesso,
  ControleCarterinha,
  TeologiaAluno,
  TeologiaClasse,
  TeologiaChamada,
  TeologiaLivro,
  LivrariaLivro,
  LivrariaPedido,
  LivrariaVenda,
  LivrariaVendaIten,
  LivrariaCamisetas,
];
const connection = new Sequelize(databaseConfig);
models.forEach((model) => model.init(connection));
models.forEach(
  (model) => model.associate && model.associate(connection.models)
);
