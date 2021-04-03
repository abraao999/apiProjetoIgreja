import { Router } from "express";
import MembroController from "../controllers/MembroController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, MembroController.update);
router.post("/", loginRequered, MembroController.storage);
router.get("/", MembroController.index);
router.get("/:id", MembroController.show);
router.delete("/:id", loginRequered, MembroController.delete);
export default router;
