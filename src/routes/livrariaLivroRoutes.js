import { Router } from "express";
import LivrariaLivroController from "../controllers/LivrariaLivroController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, LivrariaLivroController.update);
router.post("/", loginRequered, LivrariaLivroController.storage);
router.get("/", LivrariaLivroController.index);
router.get("/:id", LivrariaLivroController.show);
router.get("/pesquisaData/:id", LivrariaLivroController.pesquisaData);
router.delete("/:id", loginRequered, LivrariaLivroController.delete);
export default router;
