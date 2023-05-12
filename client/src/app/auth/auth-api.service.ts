import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AuthApiService {

  // URL to node server running in local
  authUrl: string = 'http://localhost:3000/api/auth';

  constructor(
    private http: HttpClient,
  ) { }

  // login API call
  onLogin(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(this.authUrl + '/login', body);
  }

  // register APi call
  onRegister(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(this.authUrl + '/register', body);
  }

  onLogout(): Observable<any> {
    return this.http.post(this.authUrl + '/logout', {});
  }
}
