import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: {
      animation: 'in',
    },
  },
  {
    path: ':id',
    component: DetailedInformationPageComponent,
    data: {
      animation: 'fade',
    },
    canLoad: [AuthGuard],
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
