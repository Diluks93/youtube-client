import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginInformationBlockComponent } from './components/header/login-information-block/login-information-block.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { SearchComponent } from './components/header/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { CachingInterceptor } from './http-interceptors/caching.interceptor';
import { HeaderInterceptor } from './http-interceptors/header.interceptor';
import { JwtInterceptor } from './http-interceptors/jwt.interceptor';
import { fakeBackendProvider } from './http-interceptors/fake-backend.interceptor';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginInformationBlockComponent,
    LogoComponent,
    SettingButtonComponent,
    SearchComponent,
    PageNotFoundComponent,
    HomePageComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: CachingInterceptor, multi: true },

    fakeBackendProvider,
  ],
  exports: [HeaderComponent, FooterComponent],
})
export class CoreModule {}
