import { Component } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent {
  constructor(private authService: AuthService) {}

  get name() {
    return this.authService.userValue
      ? this.authService.userValue.firstName
      : 'You are not logged in!';
  }
}
