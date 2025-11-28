
import db from "../models/index.js";
const { Team, Player } = db;

// List all teams with players
export const list = async (req, res) => {
  try {
    const teams = await Team.findAll({ include: [{ model: Player, as: "players" }] });
    res.json(teams);
  } catch (err) {
    console.error("Error in list teams:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Get team by ID
export const get = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id, { include: [{ model: Player, as: "players" }] });
    if (!team) return res.status(404).json({ message: "Team not found" });
    res.json(team);
  } catch (err) {
    console.error("Error in get team:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

// Create new team
export const create = async (req, res) => {
  try {
    const { name, country, flag_url, coach, group } = req.body;

    // Validation check
    if (!name || !country) {
      return res.status(400).json({ message: "Name and country are required" });
    }

    const team = await Team.create({ name, country, flag_url, coach, group });
    res.status(201).json(team);
  } catch (err) {
    console.error("Error in create team:", err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.errors ? err.errors.map(e => e.message) : err.message
    });
  }
};

// Update team
export const update = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found" });

    const { name, country, flag_url, coach, group } = req.body;

    // Validation check
    if (!name || !country) {
      return res.status(400).json({ message: "Name and country are required" });
    }

    await team.update({ name, country, flag_url, coach, group });
    res.json(team);
  } catch (err) {
    console.error("Error in update team:", err);
    res.status(500).json({
      message: "Internal Server Error",
      error: err.errors ? err.errors.map(e => e.message) : err.message
    });
  }
};

// Delete team
export const remove = async (req, res) => {
  try {
    const team = await Team.findByPk(req.params.id);
    if (!team) return res.status(404).json({ message: "Team not found" });

    await team.destroy();
    res.json({ message: "Team deleted successfully" });
  } catch (err) {
    console.error("Error in delete team:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};
