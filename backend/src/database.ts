import mongoose,{ConnectionOptions} from 'mongoose';
const uri:any = process.env.MONGO_URI

const config:ConnectionOptions = {
   useNewUrlParser:true,
   useUnifiedTopology:true,
   useCreateIndex:true
}
export const connection = async ()=>{
   try {
     await  mongoose.connect(uri, config)
     console.log('db is connected');
 
   } catch (error) {
      console.log(error)
   }
  }

  connection();
