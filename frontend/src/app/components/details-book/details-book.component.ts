import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service'
import {ActivatedRoute, Router} from '@angular/router'
import {Book} from '../../interface/book.interface'
@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.scss']
})
export class DetailsBookComponent implements OnInit {
  book:Book ;
  constructor(private dataService: DataApiService, private activeRouter:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    this.activeRouter.params.subscribe( (param)=>{
    	   this.dataService.getOneBook(param.id).subscribe(
           (res:any)=>{
           	this.book= res
         
           },
            error=>console.log(error)
    	)
    })
  }



  getOneBook(){

  }

}
