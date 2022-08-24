import { Router } from "express";
import LivrariaVendaItenController from "../../controllers/Livraria/LivrariaVendaItenController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, LivrariaVendaItenController.update);
router.post("/", loginRequered, LivrariaVendaItenController.storage);
router.get("/", LivrariaVendaItenController.index);
router.get("/:id", LivrariaVendaItenController.show);
router.get("/getItens/:id", LivrariaVendaItenController.getVenda);
router.delete("/:id", loginRequered, LivrariaVendaItenController.delete);
export default router;
