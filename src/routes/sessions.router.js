import { Router } from "express";
import { getSessionsInfo } from "../controllers/sessions.controller.js";

const router = Router();

router.get("/", getSessionsInfo);

export default router;