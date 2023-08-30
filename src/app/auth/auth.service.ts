import { Subject } from 'rxjs';
import { AuthData } from './auth-dataa.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user!: User | null;

  constructor(private router: Router) {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000),
    };
    this.authSuccessful(['/trainig'], true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000),
    };
    this.authSuccessful(['/training'], true);
  }

  logout() {
    this.user = null;
    this.authSuccessful(['/login'], false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user !== null;
  }

  authSuccessful(route: Array<any>, next: boolean) {
    this.router.navigate(route);
    this.authChange.next(next);
  }
}
