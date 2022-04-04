import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPipe } from './pipes/auth.pipe';
import { AuthComponent } from './components/auth/auth.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [AuthPipe, AuthComponent],
  imports: [CommonModule, AuthRoutingModule],
})
export class AuthModule {}
