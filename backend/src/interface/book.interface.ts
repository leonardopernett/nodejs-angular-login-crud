import {Document} from 'mongoose'
export interface IBook extends Document{
  id?:string;
  title:string;
  languajes:string;
  description:string;
  portada:string;
  price:string;
  author:string;
  oferta:number;
}