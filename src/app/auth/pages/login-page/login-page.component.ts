import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { NamePage } from '../../models/auth.model';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  private _hide: boolean = true;

  public get hide(): boolean {
    return this._hide;
  }

  public set hide(value: boolean) {
    this._hide = value;
  }

  public message: string;

  constructor(public authService: AuthService, public router: Router) {
    this.message = this.getMessage();
  }

  public isLogin: boolean = this.authService.isLoggedIn ? true : false;

  public isProcess: boolean = false;

  private getMessage(): string {
    return this.authService.isLoggedIn ? 'You are logged in!' : 'You are not logged in!';
  }

  public login(): void {
    this.message = 'Trying to log in ...';
    this.isProcess = true;
    this.authService.login().subscribe(() => {
      this.message = this.getMessage();
      if (this.authService.isLoggedIn) {
        this.isLogin = true;
        const redirectUrl: NamePage = '/main-page';

        setTimeout(() => {
          this.router.navigate([redirectUrl]);
        }, 1000);
      }
    });
  }
}
