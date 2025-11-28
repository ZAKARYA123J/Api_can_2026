import express from "express";
import {
  createMatch,
  getAllMatches,
  getUpcomingMatches,
  getMatchById,
  updateMatch,
  deleteMatch
} from "../controller/matchController.js";

import authenticateAdmin from "../controllers/";

const router = express.Router();

router.post("/", authenticateAdmin, createMatch);
router.get("/", getAllMatches);
router.get("/upcoming", getUpcomingMatches);
router.get("/:id", getMatchById);
router.put("/:id", authenticateAdmin, updateMatch);
router.delete("/:id", authenticateAdmin, deleteMatch);

export default router;
