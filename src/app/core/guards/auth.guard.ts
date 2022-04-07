import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    const url = state.url;

    return this.checkLogin(url);
  }

  private checkLogin(url: string): true | UrlTree {
    if (this.authService.isLoggedIn) {
      return true;
    }

    this.authService.redirectToUrl = url;

    return this.router.parseUrl('/login-page');
  }

  public canLoad() {
    if (this.authService.isLoggedIn) {
      return true;
    }

    return this.router.parseUrl('/login-page');
  }
}
