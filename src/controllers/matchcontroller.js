import Match from "../models/Match.js";
import Team from "../models/Team.js";

export const createMatch = async (req, res) => {
  try {
    const match = await Match.create(req.body);
    res.status(201).json({ message: "Match created successfully", match });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAllMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      include: [
        { model: Team, as: "homeTeam" },
        { model: Team, as: "awayTeam" },
      ],
    });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getUpcomingMatches = async (req, res) => {
  try {
    const matches = await Match.findAll({
      where: { status: "scheduled" },
      include: [
        { model: Team, as: "homeTeam" },
        { model: Team, as: "awayTeam" },
      ],
      order: [["match_date", "ASC"]],
    });
    res.json(matches);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getMatchById = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id, {
      include: [
        { model: Team, as: "homeTeam" },
        { model: Team, as: "awayTeam" },
      ],
    });
    if (!match) return res.status(404).json({ error: "Match not found" });
    res.json(match);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updateMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ error: "Match not found" });
    await match.update(req.body);
    res.json({ message: "Match updated successfully", match });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deleteMatch = async (req, res) => {
  try {
    const match = await Match.findByPk(req.params.id);
    if (!match) return res.status(404).json({ error: "Match not found" });
    await match.destroy();
    res.json({ message: "Match deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
