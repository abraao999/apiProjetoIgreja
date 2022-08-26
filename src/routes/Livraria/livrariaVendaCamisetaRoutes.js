import { Router } from "express";
import LivrariaVendaCamisetaController from "../../controllers/Livraria/LivrariaVendaCamisetaController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, LivrariaVendaCamisetaController.update);
router.post("/", loginRequered, LivrariaVendaCamisetaController.storage);
router.get("/", LivrariaVendaCamisetaController.index);
router.get("/:id", LivrariaVendaCamisetaController.show);
router.delete("/:id", loginRequered, LivrariaVendaCamisetaController.delete);
export default router;
