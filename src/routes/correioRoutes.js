import { Router } from "express";
import CorreioController from "../controllers/CorreioController";

const router = new Router();

router.post("/", CorreioController.buscaCep);

export default router;
