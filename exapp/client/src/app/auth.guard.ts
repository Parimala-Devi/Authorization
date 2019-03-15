import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor (private authGuardService:AuthGuardService, private router:Router){}

  canActivate() {
    if(this.authGuardService.loggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}