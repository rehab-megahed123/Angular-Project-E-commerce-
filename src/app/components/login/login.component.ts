import { Component } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private _userauthService:UserAuthService){

  }
logout() {
throw new Error('Method not implemented.');
}
login() {

}

}
