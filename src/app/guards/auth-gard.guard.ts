import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../Services/user-auth.service';

export const authGardGuard: CanActivateFn = (route, state) => {
  let _userAuthenticationService= inject(UserAuthService);
  let _routerService=inject(Router)
  if(_userAuthenticationService.getUserLogged()){
    return true;
  }else{
    
     _routerService.navigateByUrl('/Login');
    return false;
  }
    
    
   
};

