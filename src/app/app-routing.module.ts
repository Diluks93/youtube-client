import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { HomePageComponent } from './core/pages/home-page/home-page.component';
import { PageNotFoundComponent } from './core/pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home-page',
    pathMatch: 'full',
  },
  {
    path: 'login-page',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'main-page',
    loadChildren: () => import('./youtube/youtube.module').then((m) => m.YouTubeModule),
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
  {
    path: 'home-page',
    component: HomePageComponent,
    canActivate: [AuthGuard],
    data: {
      animation: 'fade',
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      animation: 'in',
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
