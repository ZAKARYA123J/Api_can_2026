import express from "express";
import * as userController from "../controllers/usersController.js";


const router = express.Router();
import { Authenticate,adminAuthorization } from "../middlewares/auth.middleawre.js";
router.get("/",Authenticate, adminAuthorization, userController.list);
router.get("/:id",Authenticate, adminAuthorization,userController.get);
router.post("/",Authenticate,adminAuthorization, userController.create);
router.put("/:id",Authenticate,adminAuthorization, userController.update);
router.delete("/:id",Authenticate,adminAuthorization, userController.remove);

export default router;
