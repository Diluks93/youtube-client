import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthPipe } from './pipes/auth.pipe';
import { AuthComponent } from './components/auth/auth.component';

@NgModule({
  declarations: [AuthPipe, AuthComponent],
  imports: [CommonModule],
})
export class AuthModule {}
