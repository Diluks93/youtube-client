import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './modules/app-material.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FilterModule } from './components/filter/filter.module';
import { ResultModule } from './components/result/result.module';
import { PodcastService } from './services/podcast.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HeaderModule,
    FilterModule,
    ResultModule,
  ],
  providers: [PodcastService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
