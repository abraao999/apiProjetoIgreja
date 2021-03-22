import { Router } from "express";
import ContaController from "../controllers/ContaController";
// import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", ContaController.update);
router.post("/", ContaController.storage);
router.get("/", ContaController.index);
router.get("/:id", ContaController.show);
router.delete("/:id", ContaController.delete);
export default router;
