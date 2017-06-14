import { Component, Input, HostBinding } from '@angular/core';
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
export class LoginHeaderComponent {
  public user: BAIdentityUser;
  constructor(private authService: AuthService)
  {
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