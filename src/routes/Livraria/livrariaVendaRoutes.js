import { Router } from "express";
import LivrariaVendaController from "../../controllers/Livraria/LivrariaVendaController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, LivrariaVendaController.update);
router.post("/", loginRequered, LivrariaVendaController.storage);
router.get("/", LivrariaVendaController.index);
router.get("/:id", LivrariaVendaController.show);
router.delete("/:id", loginRequered, LivrariaVendaController.delete);
export default router;
