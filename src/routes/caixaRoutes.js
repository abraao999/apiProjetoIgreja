import { Router } from "express";
import CaixaController from "../controllers/CaixaController";
// import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", CaixaController.update);
router.post("/", CaixaController.storage);
router.get("/", CaixaController.index);
router.get("/:id", CaixaController.show);
router.delete("/:id", CaixaController.delete);
export default router;
