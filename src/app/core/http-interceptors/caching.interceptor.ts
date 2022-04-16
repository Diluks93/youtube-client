import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CachingInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    let cachedUrl: HttpResponse<string> = JSON.parse(localStorage.getItem(request.url)!);

    return cachedUrl
      ? of(new HttpResponse(cachedUrl as unknown as HttpRequest<string>))
      : this.sendRequest(request, next);
  }

  sendRequest(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    return next.handle(request).pipe(
      tap((event) => {
        if (event instanceof HttpResponse && !request.url.startsWith('assets')) {
          localStorage.setItem(request.url, JSON.stringify(event));
        }
      }),
    );
  }
}
