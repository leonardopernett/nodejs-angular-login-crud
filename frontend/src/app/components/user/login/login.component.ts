import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import {User} from '../../../interface/user.interface'
import {AuthService} from '../../../services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
   user:User= {
   	email:"",
   	password:""
   }
  constructor(private router:Router, private authService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
     this.authService.signin(this.user).subscribe(
       (res:any)=>{
       	console.log(res)
       	localStorage.setItem('token',res['token'])
       	this.router.navigate(['/user/profile'])
       },
       err=>console.log(err)
     )
  }

}
