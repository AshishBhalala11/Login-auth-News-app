import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsPageApiService } from './news-page-api.service';

@Component({
  selector: 'news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.css']
})

export class NewsPageComponent implements OnInit {

  basicArray: any[] = [];
  newsArray: any[] = [];
  loading:boolean = false;
  error: boolean = false;
  errorMsg: string = '';

  constructor(
    private router: Router,
    private newsPageApiService: NewsPageApiService,
  ) { }

  ngOnInit(): void {
    this.loading = true;
    this.error = false;
    this.errorMsg = '';
    this.newsPageApiService.getNewsFeed().subscribe({
      next: (response) => {
        this.basicArray = response.articles;
        this.newsArray = response.articles;
        this.loading = false;
      },
      error: (err) => {
        this.loading = false;
        this.error = true;
        this.errorMsg = err.error.error;
      }
    })
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    // Check if the user has reached the bottom of the window
    if (scrollTop + windowHeight >= documentHeight - 48) {
      // Repeat the newsArray
      this.newsArray = [...this.newsArray, ...this.basicArray];
    }
  }

  onLogout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
