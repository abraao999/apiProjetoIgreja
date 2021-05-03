import dontenv from "dotenv";
import { resolve } from "path";

dontenv.config();
import "./database";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import funcaoRoutes from "./routes/funcaoRoutes";
import cargoRoutes from "./routes/cargoRoutes";
import setorRoutes from "./routes/setorRoutes";
import departamentoRoutes from "./routes/departamentoRoutes";
import caixaRoutes from "./routes/caixaRoutes";
import membroRoutes from "./routes/membroRoutes";
import classeRoutes from "./routes/classeRoutes";
import alunoRoutes from "./routes/alunoRoutes";
import tokemRoutes from "./routes/tokemRoutes";
import abatimentoRoutes from "./routes/abatimentoRoutes";
import dizimoRoutes from "./routes/dizimoRoutes";

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
    this.app.use("/membro/", membroRoutes);
    this.app.use("/classe/", classeRoutes);
    this.app.use("/aluno/", alunoRoutes);
    this.app.use("/tokem/", tokemRoutes);
    this.app.use("/abatimento/", abatimentoRoutes);
    this.app.use("/dizimo/", dizimoRoutes);
  }
}
export default new App().app;
