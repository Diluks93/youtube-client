import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainPageComponent,
    data: {
      animation: 'main-page',
    },
  },
  {
    path: 'podcast/:id',
    component: DetailedInformationPageComponent,
    data: {
      animation: 'podcast',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YoutubeRoutingModule {}
