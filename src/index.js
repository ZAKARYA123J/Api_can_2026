import express from "express"
const app =express()
import authRoutes from "./routes/auth.routes.js";
import sequelize from "./db.js"
const port=3000
app.use(express.json());   // <-- this line was missing
const main=async()=>{
    try{
    await sequelize()
    app.listen(port,()=>console.log(`server runing on ${port}`))
    }catch(error){
        console.log(error)
    }


}
    app.use("/auth", authRoutes);

main()