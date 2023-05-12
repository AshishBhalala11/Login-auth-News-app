import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})

export class NewsFeedComponent{

  @Input() newsArray: any[] =[];

  constructor() {}
}
