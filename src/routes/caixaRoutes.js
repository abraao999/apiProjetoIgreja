import { Router } from "express";
import CaixaController from "../controllers/CaixaController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, CaixaController.update);
router.post("/", loginRequered, CaixaController.storage);
router.get("/", CaixaController.index);
router.get("/maxId", CaixaController.maxId);
router.get("/:id", CaixaController.show);
router.delete("/:id", loginRequered, CaixaController.delete);
export default router;
