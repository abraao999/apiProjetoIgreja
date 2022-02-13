import { Router } from "express";
import ControleAcessoController from "../controllers/ControleAcessoController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, ControleAcessoController.update);
router.post("/", ControleAcessoController.storage);
router.get("/", ControleAcessoController.index);
router.get("/:id", ControleAcessoController.show);
router.get("/getPermicoes/:id", ControleAcessoController.getPermicoes);
router.delete("/:id", loginRequered, ControleAcessoController.delete);
export default router;
