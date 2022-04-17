import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListComponent } from './components/filter/filter-criteria-block/list.component';
import { InputComponent } from './components/filter/input/input.component';
import { ResultComponent } from './components/result/result.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MySlicePipe } from './pipes/my-slice.pipe';
import { StatusPublicationsDirective } from './directives/status-publications.directive';
import { OrderByPipe } from './pipes/order-by.pipe';
import { SharedModule } from '../shared/shared.module';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { DetailedInformationPageComponent } from './pages/detailed-information-page/detailed-information-page.component';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { StatisticsViewComponent } from './components/statistics-view/statistics-view.component';
import { ButtonComponent } from './components/button/button.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { LoadingComponent } from './components/loading/loading.component';

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
    StatisticsViewComponent,
    ButtonComponent,
    AdminPageComponent,
    LoadingComponent,
  ],
  imports: [SharedModule, CommonModule, YoutubeRoutingModule],
})
export class YouTubeModule {}
