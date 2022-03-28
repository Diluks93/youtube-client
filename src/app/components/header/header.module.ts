import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { HeaderComponent } from './header/header.component';
import { LoginInformationBlockComponent } from './login-information-block/login-information-block.component';
import { SettingButtonComponent } from './setting-button/setting-button.component';
import { SearchComponent } from './search/search.component';
import { LogoComponent } from './logo/logo.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginInformationBlockComponent,
    SettingButtonComponent,
    SearchComponent,
    LogoComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
  ],
  exports: [
    HeaderComponent,
    MatToolbarModule,
    LoginInformationBlockComponent,
    SettingButtonComponent,
    SearchComponent,
    LogoComponent,
  ],
})
export class HeaderModule {}
