import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UIService } from 'src/app/shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  maxDate!: Date;
  isLoading = false;
  private loadingSubs!: Subscription;

  ngOnInit(): void {
    this.loadingSubs = this.uiService.loadingServiceChanged.subscribe((isLoading) => {
      this.isLoading = isLoading;
    })
    this.limitMaxDate();
  }

  constructor(private authService: AuthService, private uiService: UIService) {}

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
