import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;

  public redirectToUrl: string | null = null;

  public login(): Observable<boolean> {
    return of(true).pipe(
      delay(1000),
      tap(() => {
        this.isLoggedIn = true;
        localStorage.setItem('auth', `${this.isLoggedIn}`);
      }),
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
    localStorage.clear();
  }
}
