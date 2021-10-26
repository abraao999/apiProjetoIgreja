import { Router } from "express";
import NomeVisitanteController from "../controllers/NomeVisitanteController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", NomeVisitanteController.update);
router.post("/", NomeVisitanteController.storage);
router.get("/", NomeVisitanteController.index);
router.get("/:id", NomeVisitanteController.show);
router.get("/getNomes/:id", NomeVisitanteController.getNomes);
router.delete("/:id", NomeVisitanteController.delete);
export default router;
