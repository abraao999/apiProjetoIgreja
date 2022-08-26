import { Router } from "express";
import LivrariaVendaItenCamisetaController from "../../controllers/Livraria/LivrariaVendaItenCamisetaController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, LivrariaVendaItenCamisetaController.update);
router.post("/", loginRequered, LivrariaVendaItenCamisetaController.storage);
router.get("/", LivrariaVendaItenCamisetaController.index);
router.get("/:id", LivrariaVendaItenCamisetaController.show);
router.get("/getItens/:id", LivrariaVendaItenCamisetaController.getVenda);
router.delete(
  "/:id",
  loginRequered,
  LivrariaVendaItenCamisetaController.delete
);
export default router;
