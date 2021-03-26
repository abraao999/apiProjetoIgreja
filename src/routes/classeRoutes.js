import { Router } from "express";
import ClasseController from "../controllers/ClasseController";
// import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", ClasseController.update);
router.post("/", ClasseController.storage);
router.get("/", ClasseController.index);
router.get("/:id", ClasseController.show);
router.delete("/:id", ClasseController.delete);
export default router;
