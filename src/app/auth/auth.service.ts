import { Subject } from 'rxjs';
import { AuthData } from './auth-dataa.model';
import { User } from './user.model';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from '@angular/fire/auth';
import { TrainingService } from '../trainnig/training.service';
import { UIService } from '../shared/ui.service';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import * as UI from '../shared/ui.actions';
import * as AuthActions from './auth.actions';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private user!: User | null;
  private isAuthenticated = false;

  constructor(
    private router: Router,
    private afauth: Auth,
    private trainigService: TrainingService,
    private uiService: UIService,
    private store: Store<fromRoot.State>
  ) {}

  initAuthListener() {
    this.authChange.subscribe((user) => {
      if (user) {
        this.store.dispatch(new AuthActions.SetAuthenticated())
        this.router.navigate(['/trainig']);
      } else {
        this.trainigService.cancelSubscriptions();
        this.store.dispatch(new AuthActions.SetUnauthenticated());
        this.router.navigate(['/login']);
      }
    });
  }

  registerUser(authData: AuthData) {
    //this.uiService.loadingServiceChanged.next(true);
    this.store.dispatch(new UI.StartLoading());
    return createUserWithEmailAndPassword(
      this.afauth,
      authData.email,
      authData.password
    )
      .then((response) => {
        this.store.dispatch(new UI.StopLoading());
      })
      .catch((error) => {
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackBar(error.message, undefined, 3000);
      });
  }

  login(authData: AuthData) {
    //this.uiService.loadingServiceChanged.next(true);
    this.store.dispatch(new UI.StartLoading());
    return signInWithEmailAndPassword(
      this.afauth,
      authData.email,
      authData.password
    )
      .then((response) => {
        this.store.dispatch(new UI.StopLoading());
      })
      .catch((error) => {
        this.store.dispatch(new UI.StopLoading());
        this.uiService.showSnackBar(error.message, undefined, 3000);
      });
  }

  logout() {
    return signOut(this.afauth);
  }

  isAuth() {
    return this.isAuthenticated;
  }
}
