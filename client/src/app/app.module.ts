import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthApiService } from './auth/auth-api.service';
import { NewsFeedComponent } from './news-page/news-feed/news-feed.component';
import { NewsPageApiService } from './news-page/news-page-api.service';
import { NewsPageComponent } from './news-page/news-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsFeedComponent,
    NewsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthApiService,
    NewsPageApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
