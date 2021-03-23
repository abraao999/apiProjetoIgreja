import { Router } from "express";
import MembroController from "../controllers/MembroController";
// import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", MembroController.update);
router.post("/", MembroController.storage);
router.get("/", MembroController.index);
router.get("/:id", MembroController.show);
router.delete("/:id", MembroController.delete);
export default router;
