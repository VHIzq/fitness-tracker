import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Subscription, map } from 'rxjs';
import { Observable } from 'rxjs-compat';
import * as fromRoot  from '../../app.reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
})
export class LogginComponent implements OnInit {
  loginForm!: FormGroup;
  isLoading$!: Observable<boolean>;
  private loadingSubs!: Subscription;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(map(state => this.store.select(fromRoot.getIsLoading)));
    /* this.loadingSubs = this.uiService.loadingServiceChanged.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    ); */
    this.setupInitialForm(this.loginForm);
  }

  setupInitialForm(form: FormGroup) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onLogin() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
    });
  }

  /* ngOnDestroy(): void {
    const hasSuscriptions = !!this.loadingSubs;
    if (hasSuscriptions) {
      this.loadingSubs.unsubscribe();
    }
  } */
}
