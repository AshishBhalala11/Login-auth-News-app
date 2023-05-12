import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()

export class NewsPageApiService {

  newsUrl: string = 'http://localhost:3000/api/news/feed';
  authToken = localStorage.getItem('token');


  constructor(
    private http: HttpClient,
  ) { }

  // function to load news from local node server and with authorizarion
  getNewsFeed(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.authToken}`,
    });

    return this.http.get(this.newsUrl, {headers});
  }

}
