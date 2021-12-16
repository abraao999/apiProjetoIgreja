import { Router } from "express";
import PedidoController from "../controllers/PedidoController";

const router = new Router();

router.put("/:id", PedidoController.update);
router.post("/", PedidoController.storage);
router.get("/", PedidoController.index);
router.get("/:id", PedidoController.show);
router.delete("/:id", PedidoController.delete);
export default router;
