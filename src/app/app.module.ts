import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/app-material.module';
import { AppComponent } from './app.component';
import { PodcastService } from './services/podcast.service';
import { ListComponent } from './components/filter/list/list.component';
import { InputComponent } from './components/filter/input/input.component';
import { HeaderComponent } from './components/header/header/header.component';
import { LoginInformationBlockComponent } from './components/header/login-information-block/login-information-block.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { SearchComponent } from './components/header/search/search.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { ResultComponent } from './components/result/result.component';
import { FilterPipe } from './pipes/filter.pipe';
import { MySlicePipe } from './pipes/my-slice.pipe';
import { StatusPublicationsDirective } from './directives/status-publications.directive';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    InputComponent,
    HeaderComponent,
    LoginInformationBlockComponent,
    SettingButtonComponent,
    SearchComponent,
    LogoComponent,
    ResultComponent,
    FilterPipe,
    MySlicePipe,
    StatusPublicationsDirective,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [PodcastService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
