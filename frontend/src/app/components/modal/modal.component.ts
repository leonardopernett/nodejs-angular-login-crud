import { Component, OnInit } from '@angular/core';
import {DataApiService} from '../../services/data-api.service'
import {Location} from '@angular/common'
import {NgForm} from '@angular/forms'
@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  constructor(private location:Location, public dataApiService : DataApiService) { }

  ngOnInit(): void {
  }


  saveBook(formBook: NgForm){
     if(formBook.value.bookId ==null){
        this.dataApiService.createBook(formBook.value).subscribe(data=>location.reload())
     }else{
     	console.log('update')
     }

}
}