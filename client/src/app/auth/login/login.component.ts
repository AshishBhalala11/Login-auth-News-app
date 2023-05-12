import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../auth-api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  showLoginPage: boolean = true;
  successMessage: string = '';
  errorMessage: string = '';
  loading: boolean = false;
  success: boolean = false;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authApiService: AuthApiService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const url = this.location.path().slice(1);
    this.showLoginPage = (url.includes('login'));
  }

  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  emailControl: FormControl = <FormControl>this.loginForm.get('email');
  passwordControl: FormControl = <FormControl>this.loginForm.get('password');

  onLogin() {
    localStorage.removeItem('token');
    this.successMessage = '';
    this.errorMessage = '';
    this.loading = true;

    if (this.showLoginPage) {
      this.authApiService.onLogin(this.emailControl.value, this.passwordControl.value)
      .subscribe({
        next: (response: any) => {
          this.successMessage = response.message;
          localStorage.setItem('token', response.token);
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/news-page']);
            this.loading = false;
          }, 1000)
        },
        error: (err) => {
          this.successMessage = '';
          this.errorMessage = err.error.error;
          this.loading = false;
        }
      })
    } else {
      this.authApiService.onRegister(this.emailControl.value, this.passwordControl.value)
      .subscribe({
        next: (response: any) => {
          this.successMessage = response.message;
          this.errorMessage = '';
          setTimeout(() => {
            this.router.navigate(['/login']);
            this.loading = false;
          }, 1000)
        },
        error: (err) => {
          this.successMessage = '';
          this.errorMessage = err.error.error;
          this.loading = false;
        }
      })
    }
  }
}
