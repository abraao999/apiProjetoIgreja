import { Router } from "express";
import TeologiaClasseController from "../controllers/TeologiaClasseController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, TeologiaClasseController.update);
router.post("/", loginRequered, TeologiaClasseController.storage);
router.get("/", TeologiaClasseController.index);
router.get("/:id", TeologiaClasseController.show);
router.delete("/:id", loginRequered, TeologiaClasseController.delete);
export default router;
