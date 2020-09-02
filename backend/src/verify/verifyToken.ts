import {Request, Response, NextFunction} from 'express'
import jwt from 'jsonwebtoken'

interface IPayload {
  _id: string;
  iat: number, 
  exp: number 
}

export const verifyToken = (req:Request,res:Response, next:NextFunction)=>{
   if(!req.headers['authorization']){
     return res.status(401).json('access denied')
   }
    
   const token = req.headers['authorization'].split( ' ')[1];
   if(!token){
    return res.status(401).json('access denied')
   }
   
   const payload = jwt.verify(token,'secretkey') as IPayload
   req.userId = payload._id
   next();
}