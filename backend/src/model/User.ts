import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcrypt'

export interface IUser extends Document{
  fullname:string;
  email:string;
  password:string;
  encryptPassword(password:string): Promise<string>
  comparePassword(password:String):Promise<boolean>
}

const bookSchema = new Schema({
  fullname:{
    type:String, required:true
  },
  email:{
    type:String, required:true, unique:true
  },
  password:{
    type:String, required:true
  },

 

})


bookSchema.methods.encryptPassword = async(password:String)=>{
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt)
}

bookSchema.methods.comparePassword = async function(password:String){
  return  await bcrypt.compare(password, this.password)
}

export default model<IUser>('User', bookSchema)