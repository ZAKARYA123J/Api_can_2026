import express from "express";
import * as teamController from "../controllers/teamController.js";

const router = express.Router();

router.get("/", teamController.list);
router.get("/:id", teamController.get);
router.post("/", teamController.create);
router.put("/:id", teamController.update);
router.delete("/:id", teamController.remove);

export default router;
