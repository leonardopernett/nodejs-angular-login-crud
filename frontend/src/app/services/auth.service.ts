import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Router} from '@angular/router'
import {User} from '../interface/user.interface'
@Injectable({
  providedIn: 'root'
})
export class AuthService {
   API='http://localhost:3000'

   header:HttpHeaders = new HttpHeaders({
    
   })
  constructor(private http:HttpClient, private router:Router) { }


     signin(user:User){
      return  this.http.post(`${this.API}/signin`,user)
     }

     signup(user:User){
       return this.http.post(`${this.API}/signup`,user)
     }


     isLogged(){
     	if(localStorage.getItem('token')){
     		return true
     	}
      this.router.navigate(['/signin'])
     }

     logout(){
     	localStorage.removeItem('token')
     	return this.router.navigate(['/user/login'])
     }

     profile(){
       return this.http.get(`${this.API}/profile`,{

         headers:{
            'Authorization':'Bearer '+ localStorage.getItem('token')
         }
       })
     }
}
