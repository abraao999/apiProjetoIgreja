import { Router } from "express";
import CargoController from "../controllers/CargoController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, CargoController.update);
router.post("/", CargoController.storage);
router.get("/", CargoController.index);
router.get("/:id", CargoController.show);
router.delete("/:id", loginRequered, CargoController.delete);
export default router;
