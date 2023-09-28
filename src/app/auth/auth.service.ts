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
import { UIService } from '../shared/ui.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user!: User | null;
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private auth: Auth,
    private trainigService: TrainingService,
    private uiService: UIService
  ) {}

  initAuthListener() {
    this.authChange.subscribe((user) => {
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
    })
    /* authState(this.auth).subscribe((user) => {
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
    }); */
  }

  registerUser(authData: AuthData) {
    this.uiService.loadingServiceChanged.next(true);
    return createUserWithEmailAndPassword(
      this.auth,
      authData.email,
      authData.password
    )
    .then((response) => {
      this.uiService.loadingServiceChanged.next(false);
    })
    .catch((error) => {
      this.uiService.loadingServiceChanged.next(false);
      this.uiService.showSnackBar(error.message, undefined, 3000);
    });
  }

  login(authData: AuthData) {
    this.uiService.loadingServiceChanged.next(true);
    return signInWithEmailAndPassword(
      this.auth,
      authData.email,
      authData.password
    )
    .then((response) => {
      this.uiService.loadingServiceChanged.next(false);
    })
    .catch((error) => {
      this.uiService.loadingServiceChanged.next(false);
      this.uiService.showSnackBar(error.message, undefined, 3000);
    });
  }

  logout() {
    return signOut(this.auth);
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
