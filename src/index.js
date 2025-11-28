import express from "express";
import db from "./models/index.js";

// Routers
import usersRouter from "./router/usersRouts.js";
import playerRouter from "./router/playerRouter.js";
import matchRouter from "./router/matchRouter.js";
import teamRouter from "./router/teamRoute.js";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// API Routes
app.use("/api/users", usersRouter);
app.use("/api/players", playerRouter);
app.use("/api/matches", matchRouter);
app.use("/api/teams", teamRouter);

// Server + DB Connection
const main = async () => {
  try {
    // Check database connection
    await db.sequelize.authenticate();
    console.log("✓ Database connected successfully");

    // Sync all models
    await db.sequelize.sync({ alter: true });
    console.log("✓ All models synced");

    // Start express server
    app.listen(port, () =>
      console.log(` Server running on http://localhost:${port}`)
    );
  } catch (err) {
    console.error(" Failed to start server:", err);
  }
};

main();
