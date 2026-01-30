import express from "express";
import * as teamController from "../controllers/teamController.js";

const router = express.Router();
import { Authenticate,adminAuthorization } from "../middlewares/auth.middleawre.js";
router.get("/",Authenticate, teamController.list);
router.get("/:id",Authenticate, teamController.get);
router.post("/", Authenticate,adminAuthorization,teamController.create);
router.put("/:id", Authenticate,adminAuthorization,teamController.update);
router.delete("/:id", Authenticate,adminAuthorization,teamController.remove);

export default router;
