import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.css'],
})
export class LogginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService
    ) {}

  ngOnInit(): void {
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
      password: this.loginForm.value.password
    });
  }
}
