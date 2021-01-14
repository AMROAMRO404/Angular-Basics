import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(public router: Router) {}
  canActivate(auth: any, email: any, pass: any): boolean {
    if (!auth.isAuthenticated(email, pass)) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}
