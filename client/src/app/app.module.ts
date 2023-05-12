import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthApiService } from './auth/auth-api.service';
import { NewsfeedComponent } from './news-page/news-feed/news-feed.component';
import { NewsPageApiService } from './news-page/news-page-api.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NewsfeedComponent,
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
