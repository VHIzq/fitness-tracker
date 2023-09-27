import { Subject } from 'rxjs';
import { AuthData } from './auth-dataa.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { TrainingService } from '../trainnig/training.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user!: User | null;
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private auth: Auth,
    private trainigService: TrainingService
  ) {}

  initAuthListener() {
    authState(this.auth).subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/trainig']);
      } else {
        this.trainigService.cancelSubscriptions();
        this.authChange.next(false);
        this.router.navigate(['/login']);
        this.isAuthenticated = false;
      }
    });
  }

  registerUser(authData: AuthData) {
    return createUserWithEmailAndPassword(
      this.auth,
      authData.email,
      authData.password
    ).catch((error) => {
      console.log(error);
    });
  }

  login(authData: AuthData) {
    return signInWithEmailAndPassword(
      this.auth,
      authData.email,
      authData.password
    ).catch((error) => {
      console.log(error);
    });
  }

  logout() {
    return signOut(this.auth);
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
