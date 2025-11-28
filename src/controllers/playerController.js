import Player from "../models/Player.js";

export const createPlayer = async (req, res) => {
  try {
    const player = await Player.create(req.body);
    res.status(201).json({ message: "Player added successfully", player });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getAllPlayers = async (req, res) => {
  try {
    const players = await Player.findAll({ include: ["team"] });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getPlayerById = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id, { include: ["team"] });
    if (!player) return res.status(404).json({ error: "Player not found" });
    res.json(player);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const getPlayersByTeam = async (req, res) => {
  try {
    const players = await Player.findAll({
      where: { team_id: req.params.teamId }
    });
    res.json(players);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const updatePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (!player) return res.status(404).json({ error: "Player not found" });
    await player.update(req.body);
    res.json({ message: "Player updated successfully", player });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

export const deletePlayer = async (req, res) => {
  try {
    const player = await Player.findByPk(req.params.id);
    if (!player) return res.status(404).json({ error: "Player not found" });
    await player.destroy();
    res.json({ message: "Player deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
