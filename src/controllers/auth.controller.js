import AuthService from "../services/auth.service.js";

export default class AuthController {
  static async register(req, res) {
    try {
      const user = await AuthService.register(req.body);
      res.status(201).json({ message: "User registered successfully", user });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  static async login(req, res) {
    try {
      const { token, rest } = await AuthService.login(req.body);
      res.status(200).json({ message: "Login successful", token,user:rest});
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
}
