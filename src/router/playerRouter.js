import express from "express";
import {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  getPlayersByTeam,
  updatePlayer,
  deletePlayer
} from "../controllers/playerController.js";

import {adminAuthorization,Authenticate} from "../middlewares/auth.middleawre.js"

const router = express.Router();

router.post("/", Authenticate,adminAuthorization, createPlayer);
router.get("/", getAllPlayers);
router.get("/:id", getPlayerById);
router.get("/team/:teamId", getPlayersByTeam);
router.put("/:id", Authenticate,adminAuthorization, updatePlayer);
router.delete("/:id", Authenticate, adminAuthorization,deletePlayer);

export default router;
