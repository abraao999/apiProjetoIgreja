import { Router } from "express";
import ContaController from "../controllers/ContaController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, ContaController.update);
router.post("/", loginRequered, ContaController.storage);
router.get("/", ContaController.index);
router.get("/:id", ContaController.show);
router.delete("/:id", loginRequered, ContaController.delete);
export default router;
