import express from "express";
import {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  getPlayersByTeam,
  updatePlayer,
  deletePlayer
} from "../controllers/playerController.js";

import  Authenticate  from "../middlewares/auth.middleawre.js"

const router = express.Router();

router.post("/", Authenticate, createPlayer);
router.get("/", getAllPlayers);
router.get("/:id", getPlayerById);
router.get("/team/:teamId", getPlayersByTeam);
router.put("/:id", Authenticate, updatePlayer);
router.delete("/:id", Authenticate, deletePlayer);

export default router;
