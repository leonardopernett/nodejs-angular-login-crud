import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service'
import {User} from '../../../interface/user.interface'
import {Router} from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user:User = {
  	fullname:"",
  	email:"",
  	password:""
  }
  constructor(private authServide: AuthService, private router:Router) { }

  ngOnInit(): void {
  }
  
  register(){
    this.authServide.signup(this.user).subscribe(
        (res:any)=>{
           console.log(res)
           localStorage.setItem('token', res['token'])
           this.router.navigate(['/user/login'])
        },
        err=>console.log(err)
    )
   }
}