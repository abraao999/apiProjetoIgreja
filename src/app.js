import dontenv from "dotenv";
import { resolve } from "path";

dontenv.config();
import "./database";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import delay from "express-delay";
import funcaoRoutes from "./routes/configs/funcaoRoutes";
import cargoRoutes from "./routes/configs/cargoRoutes";
import setorRoutes from "./routes/configs/setorRoutes";
import departamentoRoutes from "./routes/configs/departamentoRoutes";
import caixaRoutes from "./routes/caixaRoutes";
import membroRoutes from "./routes/membroRoutes";
import classeRoutes from "./routes/EBD/classeRoutes";
import alunoRoutes from "./routes/EBD/alunoRoutes";
import tokemRoutes from "./routes/tokemRoutes";
import abatimentoRoutes from "./routes/abatimentoRoutes";
import dizimoRoutes from "./routes/dizimoRoutes";
import chamadaRoutes from "./routes/EBD/chamadaRoutes";
import caixaEbdRoutes from "./routes/EBD/caixaEbdRoutes";
import familiaVisitanteRoutes from "./routes/familiaVisitanteRoutes";
import nomesVisitanteRoutes from "./routes/nomesVisitanteRoutes";
import descCaixaRoutes from "./routes/descCaixaRoutes";
import pedidoRoutes from "./routes/pedidoRoutes";
import controleAcessoRoutes from "./routes/controleAcessoRoutes";
import controleCarterinhaRoutes from "./routes/controleCarterinhaRoutes";
import teologiaAlunoRoutes from "./routes/teologiaAlunoRoutes";
import correioRoutes from "./routes/correioRoutes";
import teologiaClasseRoutes from "./routes/teologiaClasseRoutes";
import teologiaChamadaRoutes from "./routes/teologiaChamadaRoutes";
import teologiaLivroRoutes from "./routes/teologiaLivroRoutes";
import livrariaLivroRoutes from "./routes/Livraria/livrariaLivroRoutes";
import livrariaPedidoRoutes from "./routes/Livraria/livrariaPedidoRoutes";

const whiteList = [
  // dados do servidor
];

const corsOptions = {
  origin(origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) callback(null, true);
    else callback(new Error("not allowed by cors"));
  },
};

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    // this.app.use(cors(corsOptions));
    // this.app.use(delay(2000));
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.static(resolve(__dirname, "..", "uploads")));
  }

  routes() {
    this.app.use("/funcao/", funcaoRoutes);
    this.app.use("/cargo/", cargoRoutes);
    this.app.use("/setor/", setorRoutes);
    this.app.use("/departamento/", departamentoRoutes);
    this.app.use("/caixa/", caixaRoutes);
    this.app.use("/caixaEbd/", caixaEbdRoutes);
    this.app.use("/membro/", membroRoutes);
    this.app.use("/classe/", classeRoutes);
    this.app.use("/aluno/", alunoRoutes);
    this.app.use("/tokem/", tokemRoutes);
    this.app.use("/abatimento/", abatimentoRoutes);
    this.app.use("/dizimo/", dizimoRoutes);
    this.app.use("/chamada/", chamadaRoutes);
    this.app.use("/familiaVisitante/", familiaVisitanteRoutes);
    this.app.use("/nomesVisitante/", nomesVisitanteRoutes);
    this.app.use("/descCaixa/", descCaixaRoutes);
    this.app.use("/pedido/", pedidoRoutes);
    this.app.use("/controleAcesso/", controleAcessoRoutes);
    this.app.use("/controleCarterinha/", controleCarterinhaRoutes);
    this.app.use("/teologiaAluno/", teologiaAlunoRoutes);
    this.app.use("/correio/", correioRoutes);
    this.app.use("/teologiaClasse/", teologiaClasseRoutes);
    this.app.use("/teologiaChamada/", teologiaChamadaRoutes);
    this.app.use("/teologiaLivro/", teologiaLivroRoutes);
    this.app.use("/livrariaLivro/", livrariaLivroRoutes);
    this.app.use("/livrariaPedido/", livrariaPedidoRoutes);
  }
}
export default new App().app;
