import usersRouter from "./router/usersRouts.js";
import playerRouter from "./router/playerRouter.js";
import matchRouter from "./router/matchRouter.js";
import teamRouter from "./router/teamRoute.js";


import express from "express"
const app = express()
import sequelize from "./db.js"
const port = 3000
import router from "./router/auth.routes.js"
app.use(express.json())

const main = async () => {
  try {
    await sequelize()
    app.use("/api/players", playerRouter);
    app.use("/api/matches", matchRouter);
    app.use("/api/teams", teamRouter);
    app.use('/api', router)
    app.listen(port, () => console.log(`server runing on ${port}`))
  }
  catch (error) {
    console.log(error)
  }
}

// Routers




// API Routes


// Server + DB Connection


main();
