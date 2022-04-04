import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginInformationBlockComponent } from './components/header/login-information-block/login-information-block.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { SettingButtonComponent } from './components/header/setting-button/setting-button.component';
import { SearchComponent } from './components/header/search/search.component';
import { SharedModule } from '../shared/shared.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    LoginInformationBlockComponent,
    LogoComponent,
    SettingButtonComponent,
    SearchComponent,
    PageNotFoundComponent,
    LoginPageComponent,
  ],
  imports: [CommonModule, SharedModule],
  exports: [HeaderComponent, FooterComponent, PageNotFoundComponent],
})
export class CoreModule {}
