import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { OffertComponent } from './components/offert/offert.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBookComponent } from './components/admin/list-book/list-book.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';

import {AuthGuard} from './auth.guard'
const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'offers', component:OffertComponent,canActivate:[AuthGuard]},
  {path:'book/:id', component:DetailsBookComponent},
  {path:'admin/list-book',component:ListBookComponent, canActivate:[AuthGuard]},
  {path:'user/login',component:LoginComponent},
  {path:'user/register', component:RegisterComponent},
  {path:'user/profile', component:ProfileComponent,canActivate:[AuthGuard]},
  {path:'**', component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 