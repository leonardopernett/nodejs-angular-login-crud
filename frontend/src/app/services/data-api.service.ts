import { Injectable } from '@angular/core';
import {HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http'
import {Book} from '../interface/book.interface'

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  uri:string= "http://localhost:3000/api/books"

 public selectedBook ={
     bookId: null,
     title:'',
     languajes:'',
     url:'',
     description:'',
     portada:'',
     price:'',
     author:'',
     oferta:''

 }
  constructor(private http:HttpClient) { 
  }
  
  header:HttpHeaders = new HttpHeaders({
    'Content-type':'application/json'
  })

  getAllBook(){
   return this.http.get(this.uri,{headers:this.header});
  }

  getOneBook(id:string){
    return this.http.get(`${this.uri}/${id}`);
  }

  createBook(book:Book){
    return this.http.post(this.uri,book);
  }

  deleteBook(id:string){
    return this.http.delete(`${this.uri}/${id}`);
  }

  updateBook(id:string, book ){
    return this.http.put(`${this.uri}/${id}`, book);
  }
}
