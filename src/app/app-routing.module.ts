import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { LoginPageComponent } from './core/pages/login-page/login-page.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';
import { DetailedInformationPageComponent } from './youtube/pages/detailed-information-page/detailed-information-page.component';
import { MainPageComponent } from './youtube/pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: 'login-page',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'main-page',
    component: MainPageComponent,
    children: [
      {
        path: 'id',
        component: DetailedInformationPageComponent,
      },
    ],
  },
  {
    path: '',
    redirectTo: '/main-page',
    pathMatch: 'full',
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
