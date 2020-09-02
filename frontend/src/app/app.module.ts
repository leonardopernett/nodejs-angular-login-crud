import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { OffertComponent } from './components/offert/offert.component';
import { HeroComponent } from './components/hero/hero.component';
import { DetailsBookComponent } from './components/details-book/details-book.component';
import { ListBookComponent } from './components/admin/list-book/list-book.component';
import { LoginComponent } from './components/user/login/login.component';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import { Page404Component } from './components/page404/page404.component';
import {DataApiService} from './services/data-api.service'
import {AuthService} from './services/auth.service';
import { ModalComponent } from './components/modal/modal.component'



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    OffertComponent,
    HeroComponent,
    DetailsBookComponent,
    ListBookComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    ModalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [DataApiService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
