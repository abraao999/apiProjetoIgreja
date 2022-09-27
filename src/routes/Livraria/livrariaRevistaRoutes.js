import { Router } from "express";
import LivrariaRevistaController from "../../controllers/Livraria/LivrariaRevistaController";

const router = new Router();

router.put("/:id", LivrariaRevistaController.update);
router.post("/", LivrariaRevistaController.storage);
router.get("/", LivrariaRevistaController.index);
router.get("/:id", LivrariaRevistaController.show);
router.delete("/:id", LivrariaRevistaController.delete);
export default router;
