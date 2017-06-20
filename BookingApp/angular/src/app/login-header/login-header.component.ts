import { Component, Input, HostBinding, OnInit } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
import {NgForm} from '@angular/forms';
import { AuthService } from '../services/auth.service';

import { BAIdentityUser} from '../model/baidentity-user.model';


@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
})
export class LoginHeaderComponent{
  public user: BAIdentityUser;

  constructor(private authService: AuthService)
  {
    if(this.isLoggedIn()){
      this.user = new BAIdentityUser(null, null, null, localStorage.getItem("username"));
    }

  }
  
  onSubmit(user: BAIdentityUser, ngFform: NgForm){
    this.authService.logIn(user);
    this.user = user;
  }

  logOut(){
    this.authService.logOut();
  }

  isLoggedIn() : boolean{
    return this.authService.isLoggedIn();
  }
}