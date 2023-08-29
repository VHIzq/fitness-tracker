import { Subject } from 'rxjs';
import { AuthData } from './auth-dataa.model';
import { User } from './user.model';

export class AuthService {
  authChange = new Subject<boolean>();
  private user!: User | null;

  constructor() {}

  registerUser(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000),
    };
    this.authChange.next(true);
  }

  login(authData: AuthData) {
    this.user = {
      email: authData.email,
      userId: Math.round(Math.random() * 10000),
    };
    this.authChange.next(true);
  }

  logout() {
    this.user = null;
    this.authChange.next(false);
  }

  getUser() {
    return { ...this.user };
  }

  isAuth() {
    return this.user !== null;
  }
}
