import { Router } from "express";
import ControleCarterinhaController from "../controllers/ControleCarterinhaController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, ControleCarterinhaController.update);
router.post("/", ControleCarterinhaController.storage);
router.get("/", ControleCarterinhaController.index);
router.get("/:id", ControleCarterinhaController.show);
router.get("/getEntregues/:id", ControleCarterinhaController.getEntregues);
router.delete("/:id", loginRequered, ControleCarterinhaController.delete);
export default router;
