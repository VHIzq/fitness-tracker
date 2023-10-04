import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service';
import { Observable, Subscription, map } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  maxDate!: Date;
  isLoading$ = Observable<boolean>;
  private loadingSubs!: Subscription;

  ngOnInit(): void {
    this.isLoading$ = this.store.pipe(
      map((state) => this.store.select(fromRoot.getIsLoading))
    )

    this.limitMaxDate();
  }

  constructor(
    private authService: AuthService,
    private store: Store<fromRoot.State>
  ) {}

  onSubmit(form: NgForm) {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password,
    });
  }

  limitMaxDate() {
    this.maxDate = new Date();
    this.maxDate.setFullYear(this.maxDate.getFullYear() - 18);
  }

  ngOnDestroy(): void {
    const hasSuscriptions = !!this.loadingSubs;
    if (hasSuscriptions) {
      this.loadingSubs.unsubscribe();
    }
  }
}
