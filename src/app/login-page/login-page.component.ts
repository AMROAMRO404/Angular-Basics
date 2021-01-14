import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardService } from '../auth-guard.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    public router: Router,
    public auth: AuthService,
    public authG: AuthGuardService
  ) {}

  ngOnInit(): void {}
  email: any;
  password: any;

  log() {
    if (
      this.auth.isAuthenticated(this.email, this.password) &&
      this.authG.canActivate(this.auth, this.email, this.password)
    ) {
      this.router.navigate(['profile']);
      console.log('go');
    } else {
      console.log('not go');
    }
  }
}
