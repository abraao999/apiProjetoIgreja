import { Router } from "express";
import TeologiaChamadaController from "../controllers/TeologiaChamadaController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, TeologiaChamadaController.update);
router.post("/", loginRequered, TeologiaChamadaController.storage);
router.get("/", TeologiaChamadaController.index);
router.get("/:id", TeologiaChamadaController.show);
router.delete("/:id", loginRequered, TeologiaChamadaController.delete);
export default router;
