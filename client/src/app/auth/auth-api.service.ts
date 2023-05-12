import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class AuthApiService {

  authUrl: string = "http://localhost:3000/api/auth"
  constructor(
    private http: HttpClient,
  ) { }

  onLogin(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(this.authUrl + '/login', body);
  }

  onRegister(email: string, password: string): Observable<any> {
    const body = {
      email,
      password
    }
    return this.http.post(this.authUrl + '/register', body);
  }
}
