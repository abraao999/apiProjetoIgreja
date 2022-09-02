import { Router } from "express";
import LivrariaReservaController from "../../controllers/Livraria/LivrariaReservaController";

const router = new Router();

router.put("/:id", LivrariaReservaController.update);
router.post("/", LivrariaReservaController.storage);
router.get("/", LivrariaReservaController.index);
router.get("/:id", LivrariaReservaController.show);
router.delete("/:id", LivrariaReservaController.delete);
export default router;
