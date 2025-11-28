import express from "express";
import {
  createMatch,
  getAllMatches,
  getUpcomingMatches,
  getMatchById,
  updateMatch,
  deleteMatch
} from "../controllers/matchcontroller.js";

import  Authenticate  from "../middlewares/auth.middleawre.js"
const router = express.Router();

router.post("/", Authenticate, createMatch);
router.get("/", getAllMatches);
router.get("/upcoming", getUpcomingMatches);
router.get("/:id", getMatchById);
router.put("/:id", Authenticate, updateMatch);
router.delete("/:id", Authenticate, deleteMatch);

export default router;
