import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from '../config/jwt.js';
import dbPromise from '../models/index.js';

const db = await dbPromise; 
const { Users } = db;

export default class AuthService {
  static async register({ username, email, password, role = "USER" }) {

    const exists = await Users.findOne({ where: { email } });
    if (exists) throw new Error("Email already exists");

    const hashed = await bcrypt.hash(password, 10);

    const user = await Users.create({
      username,
      email,
      password: hashed,
      role
    });

  const { password: _, ...rrr } = user.toJSON();
  return rrr;
  }

  static async login({ email, password }) {
    const user = await Users.findOne({ where: { email } });
    if (!user) throw new Error("Invalid email or password");

    const valid = await bcrypt.compare(password, user.password);
    if (!valid) throw new Error("Invalid email or password");

  
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: JWT_EXPIRES_IN }
    );
  const { password: _, ...rest } = user.toJSON();
    return { token, rest };
  }
}
