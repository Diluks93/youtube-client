import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Observable } from 'rxjs';

// import { AuthService } from 'src/app/auth/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  // constructor (
  //   private router: Router,
  //   private authService: AuthService
  // ) { }

  // public canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot,
  // ): true | UrlTree {
  //   const url = state.url;

  //   return this.checkLogin(url);
  // }

  // private checkLogin(url: string): true | UrlTree {
  //   if (this.authService.isLoggedIn) {
  //     return true;
  //   }

  //   this.authService.redirectToUrl = url;

  //   return this.router.parseUrl('/login-page');;
  // }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    console.log(route, state);
    return true;
  }
}
