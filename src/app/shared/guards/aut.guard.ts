import { Injectable } from '@angular/core';
import { CanActivate,Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class AuthSesionGuard implements CanActivate {

  constructor(
      private router: Router
    ){}
    
  canActivate() {
    if( !!!localStorage.getItem("login") ){
      return this.router.navigate(['login']);
    }

    return true;
  }

  
}