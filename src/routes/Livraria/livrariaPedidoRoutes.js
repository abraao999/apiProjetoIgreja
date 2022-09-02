import { Router } from "express";
import LivrariaPedidoController from "../../controllers/Livraria/LivrariaPedidoController";

const router = new Router();

router.put("/:id", LivrariaPedidoController.update);
router.post("/", LivrariaPedidoController.storage);
router.get("/", LivrariaPedidoController.index);
router.get("/:id", LivrariaPedidoController.show);
router.get("/pesquisaData/:id", LivrariaPedidoController.pesquisaData);
router.delete("/:id", LivrariaPedidoController.delete);
export default router;
