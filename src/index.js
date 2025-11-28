import express from "express";
import db from "./models/index.js";
import usersRouter from "./router/usersRouts.js";
import teamsRouter from "./router/teamRoute.js";

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api/users", usersRouter);
app.use("/api/teams", teamsRouter)

const main = async () => {
  try {
    await db.sequelize.authenticate();
    console.log("Database connected successfully");

    await db.sequelize.sync({ alter: true }); // إنشاء/تعديل الجداول حسب الموديلات

    app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
  } catch (err) {
    console.error(err);
  }
};

main();
