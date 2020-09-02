import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service'
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  user ;
  constructor(private authService:AuthService) { }

  ngOnInit(): void {
  	 if(localStorage.getItem('token')){
       this.authService.profile().subscribe(
        (res:any)=>{
          console.log(res)
          this.user= res;
          console.log(this.user)
        },
         err=>console.log(err)
        
     )
     }
  }


  logged(){
    if(localStorage.getItem('token')){
      return true ;
    }
  }

  logout(){
   return this.authService.logout()
  }

}
