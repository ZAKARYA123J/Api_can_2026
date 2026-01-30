import jwt from "jsonwebtoken"

export const Authenticate=async(req,res,next)=>{
  const authHeader=req.headers['authorization'];
  const token=authHeader && authHeader.split(' ')[1];
  if(!token){
    return res.status(401).json({message:"Token required"})
  }
  const secretKey=process.env.JWT_SECRET

  jwt.verify(token,secretKey,(err,user)=>{
    if(err){
        res.status(403).send({message:"Invalid of Experd Token"})
    }
    req.user=user
    next()
  })
};
 export const adminAuthorization=async(req,res,next)=>{
     if (req.user.role === 'admin') {
    next();
} else {
    res.status(403).send({error:'Forbidden'});
}
}
