import { Router } from "express";
import ChamadaController from "../controllers/ChamadaController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, ChamadaController.update);
router.post("/", loginRequered, ChamadaController.storage);
router.get("/", ChamadaController.index);
router.get("/:id", ChamadaController.show);
router.delete("/:id", loginRequered, ChamadaController.delete);
export default router;
