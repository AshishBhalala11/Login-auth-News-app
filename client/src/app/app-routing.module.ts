import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewsfeedComponent } from './news-page/news-feed/news-feed.component';

const routes: Routes = [{
  component: LoginComponent,
  path: 'login'
},
{
  component: LoginComponent,
  path: 'register'
},
{
  component: NewsfeedComponent,
  path: 'news-feed'
},
{
  path: '**',
  redirectTo: '/login',
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
