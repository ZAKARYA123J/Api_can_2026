import express from "express";
import {
  createMatch,
  getAllMatches,
  getUpcomingMatches,
  getMatchById,
  updateMatch,
  deleteMatch
} from "../controllers/matchcontroller.js";

import  {Authenticate,adminAuthorization}  from "../middlewares/auth.middleawre.js"
const router = express.Router();

router.post("/", Authenticate,adminAuthorization, createMatch);
router.get("/", getAllMatches);
router.get("/upcoming", getUpcomingMatches);
router.get("/:id", getMatchById);
router.put("/:id", Authenticate,adminAuthorization,adminAuthorization, updateMatch);
router.delete("/:id", Authenticate,adminAuthorization, deleteMatch);

export default router;
