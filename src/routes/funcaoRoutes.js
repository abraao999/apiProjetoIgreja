import { Router } from "express";
import FunctionController from "../controllers/FunctionController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, FunctionController.update);
router.post("/", loginRequered, FunctionController.storage);
router.get("/", FunctionController.index);
router.get("/:id", FunctionController.show);
router.delete("/:id", loginRequered, FunctionController.delete);
export default router;
