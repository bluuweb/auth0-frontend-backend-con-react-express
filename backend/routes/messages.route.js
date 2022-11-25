import { Router } from "express";
import {
    getPrivateMessages,
    getPublicMessages,
} from "../controllers/messages.controller.js";

import { validateAccessToken } from "../middlewares/auth0.middleware.js";

const router = Router();

router.get("/public", getPublicMessages);
router.get("/private", validateAccessToken, getPrivateMessages);

export default router;
