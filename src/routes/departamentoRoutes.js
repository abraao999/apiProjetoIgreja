import { Router } from "express";
import DepartamentoController from "../controllers/DepartamentoController";
// import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", DepartamentoController.update);
router.post("/", DepartamentoController.storage);
router.get("/", DepartamentoController.total);
router.get("/:id", DepartamentoController.show);
router.delete("/:id", DepartamentoController.delete);
export default router;
