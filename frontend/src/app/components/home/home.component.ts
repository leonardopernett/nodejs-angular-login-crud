import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service'
import {Book} from '../../interface/book.interface'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  books :Book[] = []  

  constructor(private dataService:DataApiService) { }

  ngOnInit(): void {
    this.getListBook();
  }

  getListBook(){
    this.dataService.getAllBook().subscribe(
      (res:any)=>{this.books = res},
       err=>console.log(err)
    )
  }
}
