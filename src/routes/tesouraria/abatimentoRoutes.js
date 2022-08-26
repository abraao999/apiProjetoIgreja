import { Router } from "express";
import AbatimentoController from "../../controllers/tesouraria/AbatimentoController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, AbatimentoController.update);
router.post("/", loginRequered, AbatimentoController.storage);
router.get("/", AbatimentoController.index);
router.get("/maxId", AbatimentoController.maxId);
router.get("/:id", AbatimentoController.show);
router.delete("/:id", loginRequered, AbatimentoController.delete);
export default router;
