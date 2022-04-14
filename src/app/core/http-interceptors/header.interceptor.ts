import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpParams,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  private baseUrl = 'https://www.googleapis.com/youtube/v3/';

  private API_KEY = 'AIzaSyCqyAvKcD-S-sW3C9ZXuOdpKl6Etz2AOkA';

  public intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<string>> {
    let newRequest = request;
    const paramKey = new HttpParams().set('?key', this.API_KEY);
    switch (true) {
      case request.url.startsWith('search'):
        const paramSearch = new HttpParams().set('type', 'video').set('maxResults', '50');
        const startUrlSearch = this.getChunksUrl(request.url).startUrl;
        const endUrlSearch = this.getChunksUrl(request.url).endUrl;
        newRequest = request.clone({
          url: `${this.baseUrl}${startUrlSearch}${paramKey}&${paramSearch}${endUrlSearch}`,
        });
        return next.handle(newRequest as HttpRequest<string>);
      case request.url.startsWith('videos'):
        const paramsVideos = new HttpParams().set('part', 'snippet,statistics');
        const startUrlVideos = this.getChunksUrl(request.url).startUrl;
        const endUrlVideos = this.getChunksUrl(request.url).endUrl;
        newRequest = request.clone({
          url: `${this.baseUrl}${startUrlVideos}${paramKey}${endUrlVideos}&${paramsVideos}`,
        });
        return next.handle(newRequest as HttpRequest<string>);
      default:
        return next.handle(request);
    }
  }

  private getChunksUrl(url: string) {
    const startUrl = url.slice(0, url.indexOf('&'));
    const endUrl = url.slice(url.indexOf('&'));
    return { startUrl, endUrl };
  }
}
