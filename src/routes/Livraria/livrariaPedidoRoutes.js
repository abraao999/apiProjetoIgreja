import { Router } from "express";
import LivrariaPedidoController from "../../controllers/Livraria/LivrariaPedidoController";
import loginRequered from "../../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, LivrariaPedidoController.update);
router.post("/", loginRequered, LivrariaPedidoController.storage);
router.get("/", LivrariaPedidoController.index);
router.get("/:id", LivrariaPedidoController.show);
router.get("/pesquisaData/:id", LivrariaPedidoController.pesquisaData);
router.delete("/:id", loginRequered, LivrariaPedidoController.delete);
export default router;
