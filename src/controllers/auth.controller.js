import db from "../models/index.js"
import bcrypt from "bcrypt"
import jwt from 'jsonwebtoken';
const User=db.User;
export const register=async(req,res)=>{
    try{
     const {username,email,password,role}=req.body
     const existeUser=await User.findOne({where:{email}})
     if(existeUser){
        return res.status(400).json({message:"User with email alredy existe"})
     }
     const hashpassword=await bcrypt.hash(password,10)
     const user=await User.create({
        username,
        email,
        password:hashpassword,
        role:role ||"user"
     })
     const token=  jwt.sign({
        id:user.id,role:user.role
     },process.env.JWT_SECRET,{expiresIn:'7d'}
    )
    res.status(201).json({
        message:"User created successfully",
        token
    })
    }catch(error){
       res.status(500).json({error:error.message})
    }
}
export const login=async(req,res)=>{
    try{
     const {email,password}=req.body
     const user= await User.findOne({where:{email}})
     if(user){
      const valid_password=await bcrypt.compare(password,user.password)
      if(valid_password){
        const token=jwt.sign({id:user.id,role:user.role
},process.env.JWT_SECRET,{expiresIn:'7d'}
)
res.status(200).json({token:token})
      }else{
        res.status(400).json({error:"password not corecte"})
      }
     }else{
      res.status(404).json({error:"user no found"})
     }
    }catch(error){
     res.status(500).json({error:error.message})
    }
}
export const me=async(req,res)=>{
   try {
  let user = await User.findOne({where:{id : req.user.id},attributes:{exclude:["password"]}});
    if(user === null){
      res.status(404).json({'msg':"User not found"});
    }
    res.status(200).json(user);
   } catch (error) {
      console.log(error)
      res.status(500).json({message:error.message})
   }
}