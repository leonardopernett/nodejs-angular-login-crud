import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../../services/data-api.service'
import {Book} from '../../../interface/book.interface'
@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
    books:Book[] =[]
  
  constructor(private dataApiService:DataApiService) { }

  ngOnInit(): void {
  	this.getBook();
  }



 getBook(){
    this.dataApiService.getAllBook().subscribe(
       (res:any)=>{
        this.books = res
        console.log(this.books)
       },
       err=>console.log(err)
    )
 }

 removeBook(id){
	 	 if(confirm('are you sure than delete')){
	 	 	this.dataApiService.deleteBook(id).subscribe(
	       (res:any)=>{
	        console.log(res)
          this.getBook();

	       },
	       err=>console.log(err)
	    )
 	 }

 }
}


