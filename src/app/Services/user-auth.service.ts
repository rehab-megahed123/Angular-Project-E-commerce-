import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
  
  getUserLogged():boolean{
    return localStorage.getItem('token')?true :false
  }
  login(){
    localStorage.setItem('token',"jjgyytfytsfusguklkmjuihyuf")

  }
  logout(){
    localStorage.removeItem('token')
  }

  constructor() { }
}
