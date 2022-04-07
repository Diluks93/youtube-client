import { Component } from '@angular/core';

import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-button-logout',
  templateUrl: './button-logout.component.html',
  styleUrls: ['./button-logout.component.scss'],
})
export class ButtonLogoutComponent {
  constructor(public authService: AuthService) {}

  public logout(): void {
    this.authService.logout();
  }
}
