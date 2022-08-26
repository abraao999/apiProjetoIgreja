import { Router } from "express";
import DizimoController from "../../controllers/tesouraria/DizimoController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, DizimoController.update);
router.post("/", loginRequered, DizimoController.storage);
router.get("/", DizimoController.index);
router.get("/:id", DizimoController.show);
router.get("/pesquisaData/:id", DizimoController.pesquisaData);
router.delete("/:id", loginRequered, DizimoController.delete);
export default router;
