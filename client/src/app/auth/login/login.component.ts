import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthApiService } from '../auth-api.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  showLoginPage: boolean = true; // variable to decide whether to show login page data or register page data
  successMessage: string = '';
  errorMessage: string = ''; // error msg in case failed to login or register
  loading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private location: Location,
    private authApiService: AuthApiService,
    private router: Router,
    private activeRoute: ActivatedRoute,
  ) {
    this.activeRoute.queryParams.subscribe(params => {
      // when refresh is passed as parameter to url reloading the application for next login attemp
      if (params['refresh']) {
        const { refresh, ...queryParams } = params;
        this.router.navigate([], { queryParams }).then(() => {
          window.location.reload();
        });
      }
    });
  }

  ngOnInit(): void {
    const url = this.location.path().slice(1);
    // if url includes login then showing login data otherwise register page data
    this.showLoginPage = (url.includes('login'));
  }

  // login and register form as using same component for both
  loginForm: FormGroup = this.fb.group({
    email: ['', Validators.required],
    password: ['', Validators.required]
  });

  emailControl: FormControl = <FormControl>this.loginForm.get('email');
  passwordControl: FormControl = <FormControl>this.loginForm.get('password');

  // login and register function
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
          localStorage.setItem('token', response.token); // seting up token in local storage for authenctication
          this.errorMessage = '';

          //navigating to news-page after 2 secs to show how loading feature looks like while logging in
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

          // if login success then redirecting to login page
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
