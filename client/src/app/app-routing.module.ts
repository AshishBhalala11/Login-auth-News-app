import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { NewsPageComponent } from './news-page/news-page.component';

const routes: Routes = [{
  component: LoginComponent,
  path: 'login'
},
{
  component: LoginComponent,
  path: 'register'
},
{
  component: NewsPageComponent,
  path: 'news-page'
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
