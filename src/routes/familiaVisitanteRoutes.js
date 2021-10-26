import { Router } from "express";
import FamiliaVisitanteController from "../controllers/FamiliaVisitanteController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", FamiliaVisitanteController.update);
router.post("/", FamiliaVisitanteController.storage);
router.get("/", FamiliaVisitanteController.index);
router.get("/:id", FamiliaVisitanteController.show);
router.delete("/:id", FamiliaVisitanteController.delete);
export default router;
