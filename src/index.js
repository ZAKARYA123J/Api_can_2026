import express from "express"
const app =express()
import sequelize from "./db.js"
const port=3000
const main=async()=>{
    await sequelize()
    app.listen(()=>console.log(`server runing on ${port}`))

}
main()