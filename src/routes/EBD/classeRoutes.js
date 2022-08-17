import { Router } from "express";
import ClasseController from "../../controllers/EBD/ClasseController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, ClasseController.update);
router.post("/", loginRequered, ClasseController.storage);
router.get("/", ClasseController.index);
router.get("/:id", ClasseController.show);
router.delete("/:id", loginRequered, ClasseController.delete);
export default router;
