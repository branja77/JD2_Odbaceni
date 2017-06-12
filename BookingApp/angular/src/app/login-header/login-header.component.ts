import { Component, Input, HostBinding } from '@angular/core';
import {
  Router,
  ActivatedRoute
} from '@angular/router';
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
      this.user = {id: "branja", email: "branja@gmail.com", password: "branja", username: "branja"};
  }
  
  logIn(){
    this.authService.logIn();
  }

  logOut(){
    this.authService.logOut();
  }

  isLoggedIn() : boolean{
    return this.authService.isLoggedIn();
  }
}