import express from "express"
const app =express()
import sequelize from "./db.js"
const port=3000
import router from "./router/auth.routes.js"
app.use(express.json())
app.use('/api',router)
const main=async()=>{
    try{   await sequelize()
    app.listen(port,()=>console.log(`server runing on ${port}`))}
    catch(error){
         console.log(error)
    }
 

}

main()