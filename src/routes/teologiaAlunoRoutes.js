import { Router } from "express";
import TeologiaAlunoController from "../controllers/TeologiaAlunoController";
import loginRequered from "../middlewares/loginRequered";

const router = new Router();

router.put("/:id", loginRequered, TeologiaAlunoController.update);
router.post("/", loginRequered, TeologiaAlunoController.storage);
router.get("/", TeologiaAlunoController.index);
router.get("/:id", TeologiaAlunoController.show);
router.delete("/:id", loginRequered, TeologiaAlunoController.delete);
export default router;
