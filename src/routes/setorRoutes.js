import { Router } from "express";
import SetorController from "../controllers/SetorController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, SetorController.update);
router.post("/", loginRequered, SetorController.storage);
router.get("/", SetorController.index);
router.get("/:id", SetorController.show);
router.delete("/:id", loginRequered, SetorController.delete);
export default router;
