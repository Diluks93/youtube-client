import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, materialize, dematerialize } from 'rxjs/operators';

import { User } from 'src/app/auth/models/auth.model';

const usersKey: string = 'login-example-users';
const DELAY_OBSERVABLE_TO_SIMULATE_SERVER_API_CALL = 500;
let users = JSON.parse(localStorage.getItem(usersKey)!) || [];

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<User>, next: HttpHandler): Observable<HttpEvent<User>> {
    const { url, method, body } = request;

    function error(message: string) {
      return throwError(() => new Error(message)).pipe(
        materialize(),
        delay(DELAY_OBSERVABLE_TO_SIMULATE_SERVER_API_CALL),
        dematerialize(),
      );
    }

    function ok(bodyResponse: Omit<User, 'password'>) {
      return of(new HttpResponse({ status: 200, body: bodyResponse })).pipe(
        materialize(),
        delay(DELAY_OBSERVABLE_TO_SIMULATE_SERVER_API_CALL),
        dematerialize(),
      );
    }

    function basicDetails(user: User) {
      const { id, email, firstName, lastName } = user;
      return { id, email, firstName, lastName };
    }

    function authenticate() {
      const { email, password } = body as Pick<User, 'email' | 'password'>;
      const user = users.find((x: User) => x.email === email && x.password === password);
      if (!user) return error('Username or password is incorrect');
      return ok({
        ...basicDetails(user),
        token: 'fake-jwt-token',
      });
    }

    function handleRoute() {
      switch (true) {
        // todo create registration
        case url.endsWith('/authenticate') && method === 'POST':
          return authenticate();
        default:
          return next.handle(request);
      }
    }

    return handleRoute();
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptor,
  multi: true,
};
