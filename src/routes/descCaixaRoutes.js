import { Router } from "express";
import DescCaixaController from "../controllers/DescCaixaController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, DescCaixaController.update);
router.post("/", loginRequered, DescCaixaController.storage);
router.get("/", DescCaixaController.index);
router.get("/:id", DescCaixaController.show);
router.delete("/:id", loginRequered, DescCaixaController.delete);
export default router;
