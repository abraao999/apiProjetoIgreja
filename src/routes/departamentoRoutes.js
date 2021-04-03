import { Router } from "express";
import DepartamentoController from "../controllers/DepartamentoController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, DepartamentoController.update);
router.post("/", loginRequered, DepartamentoController.storage);
router.get("/", DepartamentoController.index);
router.get("/:id", DepartamentoController.show);
router.delete("/:id", loginRequered, DepartamentoController.delete);
export default router;
