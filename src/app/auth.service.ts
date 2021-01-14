import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public router: Router) {}
  userEmail: String = 'amro@gmail.com';
  userPassword: String = '123';
  public isAuthenticated(email: any, pass: any): boolean {
    if (
      localStorage.getItem('log') == 'log' &&
      this.userEmail == email &&
      this.userPassword == pass
    ) {
      console.log('this user is authnticated');
      return true;
    } else {
      this.router.navigate(['login']);
      console.log('this user is not authnticated');
      return false;
    }
  }
}
