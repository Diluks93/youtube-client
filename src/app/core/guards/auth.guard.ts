import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router, private authService: AuthService) {}

  public canActivate(_: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const user = this.authService.userValue;
    if (user) {
      return true;
    }

    this.router.navigate(['/login-page'], { queryParams: { returnUrl: state.url } });
    return false;
  }

  public canLoad() {
    if (localStorage.getItem('login-example-users')) {
      return true;
    }

    return this.router.parseUrl('/login-page');
  }
}
