import {Request, Response} from 'express'
import Book from '../model/Book'
import { IBook } from '../interface/book.interface';

export const getBooks = async (req:Request, res:Response)=>{
  const books:any = await Book.find();
  res.json(books);
}

export const getOneBooks = async (req:Request, res:Response)=>{
  const book = await Book.findById(req.params.id);
  res.json(book);
}


export const deleteBooks = async (req:Request, res:Response)=>{
  await Book.deleteOne({_id:req.params.id});
  res.json({message:'book deleted'});
}


export const createBook = async (req:Request, res:Response)=>{
  const {title, languajes, description, portada, price, author, oferta}= req.body;
  const newBook ={title, languajes, description, portada, price, author, oferta}
  const book = new Book(newBook);
  await book.save();
  res.json({message:'book saved'});
}


export const updateBook =  async (req:Request, res:Response)=>{
  const {title, languajes, description, portada, price, author, oferta}= req.body;
  const newBook:any ={title, languajes, description, portada, price, author, oferta}
  if(newBook){
    await Book.updateOne({_id:req.params.id},newBook)
    res.json({message:'book update'});
  }
}



