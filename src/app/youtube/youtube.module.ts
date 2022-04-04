import { NgModule } from '@angular/core';
import { LocationStrategy, HashLocationStrategy, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PodcastService } from './services/podcast.service';
import { ListComponent } from './components/filter/list/list.component';
import { InputComponent } from './components/filter/input/input.component';
import { ResultComponent } from './components/result/result.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MySlicePipe } from './pipes/my-slice.pipe';
import { StatusPublicationsDirective } from './directives/status-publications.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';

@NgModule({
  declarations: [
    ListComponent,
    InputComponent,
    FilterPipe,
    MySlicePipe,
    StatusPublicationsDirective,
    OrderByPipe,
    ResultComponent,
    MainPageComponent,
    DetailedInformationPageComponent,
  ],
  imports: [SharedModule, CommonModule, RouterModule],
  exports: [MainPageComponent, DetailedInformationPageComponent],
  providers: [PodcastService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class YouTubeModule {}
