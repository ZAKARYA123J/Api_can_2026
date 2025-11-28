import express from "express";
import {
  createPlayer,
  getAllPlayers,
  getPlayerById,
  getPlayersByTeam,
  updatePlayer,
  deletePlayer
} from "../controllers/playerController.js";

import authenticateAdmin from "../middleware/authenticateAdmin.js";

const router = express.Router();

router.post("/", authenticateAdmin, createPlayer);
router.get("/", getAllPlayers);
router.get("/:id", getPlayerById);
router.get("/team/:teamId", getPlayersByTeam);
router.put("/:id", authenticateAdmin, updatePlayer);
router.delete("/:id", authenticateAdmin, deletePlayer);

export default router;
