import {Schema, model} from 'mongoose';

const bookSchema = new Schema({
  title:{
    type:String, required:true
  },
  languajes:{
    type:String, required:true
  },
  description:{
    type:String, required:true
  },
  url:{
    type:String
  },

  portada:{
    type:String, required:true
  },
  price:{
    type:String, required:true
  },

  author:{
    type:String, required:true
  },
  oferta:{
    type:String, required:true
  },

},{timestamps:true})

export default model('Book', bookSchema)