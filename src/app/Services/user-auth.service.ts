import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  private authenticationSub:BehaviorSubject<boolean>
  
  getUserLogged():boolean{
    return localStorage.getItem('token')?true :false
  }
  login(){
    localStorage.setItem('token',"jjgyytfytsfusguklkmjuihyuf")
    this.authenticationSub.next(true)

  }
  logout(){
    localStorage.removeItem('token')
    this.authenticationSub.next(false)
  }
  getAuthSubject():BehaviorSubject<boolean>{
    return this.authenticationSub
  }

  constructor() {
    this.authenticationSub=new BehaviorSubject<boolean>(false);
   }
}
