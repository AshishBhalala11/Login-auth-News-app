import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()

export class NewsPageApiService {

  apiUrl: string = 'https://newsapi.org/v2/'
  apiKey: string = environment.newsApiKeyl;
}
