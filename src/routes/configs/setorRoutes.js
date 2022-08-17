import { Router } from "express";
import SetorController from "../../controllers/configs/SetorController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, SetorController.update);
router.post("/", SetorController.storage);
router.get("/", SetorController.index);
router.get("/:id", SetorController.show);
router.delete("/:id", loginRequered, SetorController.delete);
export default router;
