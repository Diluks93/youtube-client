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

  private checkLogin(url: string): true | UrlTree {
    if (localStorage.getItem('auth')) {
      return true;
    }

    this.authService.redirectToUrl = url;

    return this.router.parseUrl('/login-page');
  }

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): true | UrlTree {
    const url = state.url;

    return this.checkLogin(url);
  }

  public canLoad() {
    if (localStorage.getItem('auth')) {
      return true;
    }

    return this.router.parseUrl('/login-page');
  }
}
