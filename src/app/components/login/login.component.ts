import { Component } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isUserLogged:boolean=false
  constructor(private _userauthService:UserAuthService){
         
  }
logout() {
this._userauthService.logout()
this.isUserLogged= this._userauthService.getUserLogged()
}
login() {
  this._userauthService.login()
  this.isUserLogged= this._userauthService.getUserLogged()

}

}
