import { Sequelize } from "sequelize";
import 'dotenv/config'
const sequelize =async()=>{
     const db= new Sequelize(process.env.DB,process.env.USER, process.env.PASSWORD, {
  host: "localhost",
  dialect: "postgres", // because you're using pg + pg-hstore
}); 

try{
 await db.authenticate()
 console.log("database connected")
}catch(error){
  console.log(error)
}

} 
export default sequelize;
