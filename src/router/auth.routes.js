import express from "express"
import  Authenticate  from "../middlewares/auth.middleawre.js"
import { register,login ,me} from "../controllers/auth.controller.js"
const router=express.Router()
router.post("/register",register)
router.post("/login",login)
router.get("/me",Authenticate,me)
export default router