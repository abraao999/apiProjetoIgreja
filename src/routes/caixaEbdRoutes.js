import { Router } from "express";
import CaixaEbcController from "../controllers/CaixaEbdController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, CaixaEbcController.update);
router.post("/", loginRequered, CaixaEbcController.storage);
router.get("/", CaixaEbcController.index);
router.get("/maxId", CaixaEbcController.maxId);
router.get("/:id", CaixaEbcController.show);
router.delete("/:id", loginRequered, CaixaEbcController.delete);
export default router;
