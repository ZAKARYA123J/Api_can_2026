// import User from "../models/User.js";
import db from "../models/index.js";
const { User } = db;

import bcrypt from "bcrypt";

export const list = async (req, res) => {
  try {
    const users = await User.findAll({ attributes: { exclude: ["password"] } });
    res.json(users);
  } catch (err) {
    console.error("Error in list users:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

export const get = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id, { attributes: { exclude: ["password"] } });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    console.error("Error in get user:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

export const create = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hashedPassword, role });
    res.status(201).json({ id: user.id, username: user.username, email: user.email, role: user.role });
  } catch (err) {
    console.error("Error in create user:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

export const update = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    const { username, email, role } = req.body;
    await user.update({ username, email, role });
    res.json(user);
  } catch (err) {
    console.error("Error in update user:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};

export const remove = async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.destroy();
    res.json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error in delete user:", err);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
  }
};
