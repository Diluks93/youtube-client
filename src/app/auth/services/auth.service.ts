import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../models/auth.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public isLoggedIn: boolean = false;

  public redirectToUrl: string | null = null;

  private userSubject: BehaviorSubject<User>;

  public user: Observable<User>;

  constructor(private router: Router, private http: HttpClient) {
    this.userSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')!));
    this.user = this.userSubject.asObservable();
  }

  public get userValue(): User {
    return this.userSubject.value;
  }

  public login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${environment.apiUrl}/authenticate`, { email, password }).pipe(
      map((user) => {
        localStorage.setItem('user', JSON.stringify(user));
        this.isLoggedIn = true;
        this.userSubject.next(user);
        return user;
      }),
    );
  }

  public logout(): void {
    this.isLoggedIn = false;
    localStorage.removeItem('user');
    this.userSubject.next(null!);
    this.router.navigate(['/login-page']);
  }
}
