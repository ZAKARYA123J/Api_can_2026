import { Sequelize } from "sequelize";
import "dotenv/config";

const sequelize = async () => {
  const db = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST || "localhost",
      dialect: "postgres",
      port: process.env.DB_PORT || 5432,
      logging: console.log,
    }
  );

  try {
    await db.authenticate();
    console.log("Database connected successfully");
    return db;
  } catch (error) {
    console.error("Unable to connect to database:", error);
    throw error;
  }
};

export default sequelize;
