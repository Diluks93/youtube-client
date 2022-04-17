import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login-information-block',
  templateUrl: './login-information-block.component.html',
})
export class LoginInformationBlockComponent {
  constructor(public authService: AuthService) {}

  get name() {
    return this.authService.userValue
      ? this.authService.userValue.firstName
      : 'You are not logged in!';
  }
}
