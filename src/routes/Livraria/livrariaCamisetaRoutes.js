import { Router } from "express";
import LivrariaCamisetaController from "../../controllers/Livraria/LivrariaCamisetaController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, LivrariaCamisetaController.update);
router.post("/", loginRequered, LivrariaCamisetaController.storage);
router.get("/", LivrariaCamisetaController.index);
router.get("/:id", LivrariaCamisetaController.show);
router.get("/pesquisaData/:id", LivrariaCamisetaController.pesquisaData);
router.delete("/:id", loginRequered, LivrariaCamisetaController.delete);
export default router;
