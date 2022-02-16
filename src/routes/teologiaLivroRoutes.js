import { Router } from "express";
import TeologiaLivroController from "../controllers/TeologiaLivroController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, TeologiaLivroController.update);
router.post("/", loginRequered, TeologiaLivroController.storage);
router.get("/", TeologiaLivroController.index);
router.get("/:id", TeologiaLivroController.show);
router.get("/pesquisaData/:id", TeologiaLivroController.pesquisaData);
router.delete("/:id", loginRequered, TeologiaLivroController.delete);
export default router;
