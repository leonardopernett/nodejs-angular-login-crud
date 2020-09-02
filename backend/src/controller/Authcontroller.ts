import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'
import User, { IUser } from '../model/User';


function addToken(user:any){
  return jwt.sign({_id:user._id},'secretkey',{expiresIn:60*60*24})
}

export const signup = async (req:Request, res:Response)=>{
    const {fullname,email,password}= req.body;
    const emailVerify = await User.findOne({email:email})
    if(emailVerify){
      return res.status(400).json('email already exist')
    }
    
      const user:IUser = new User({fullname,email,password});
      user.password = await user.encryptPassword(password)
      const userSave = await user.save();
      res.json({token:addToken(userSave)})
}

export const signin = async (req:Request, res:Response)=>{
  const {fullname,email,password}= req.body;
  const user = await User.findOne({email:email})
  if(!user){
    return res.status(400).json('email not exist')
  }
  
  const verifyPassword= await user.comparePassword(password)
  if(!verifyPassword){
    return res.status(400).json('password wrong') 
  }
  res.json({token:addToken(user)})
}

export const profile = async  (req:Request, res:Response)=>{
  const user = await User.findById(req.userId,{password:0});
  console.log(user)
  res.json(user)
}