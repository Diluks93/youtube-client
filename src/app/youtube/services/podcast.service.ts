import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of, shareReplay } from 'rxjs';
import { map, catchError, mergeMap, retry } from 'rxjs/operators';

import { Podcast } from '../models/podcast-model';
import {
  ClientItemVideo,
  ResponseClientSearch,
  ResponseClientVideo,
} from '../models/response-client.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  constructor(private messageService: MessageService, private http: HttpClient) {}

  private API_URL_SEARCH = 'https://www.googleapis.com/youtube/v3/search';

  private API_URL_VIDEOS = 'https://www.googleapis.com/youtube/v3/videos';

  private API_KEY = 'AIzaSyCqyAvKcD-S-sW3C9ZXuOdpKl6Etz2AOkA';

  private dataIds: string[] = [];

  cashedPodcasts$!: Observable<Podcast[]>;

  public getPodcasts(query: string): Observable<Podcast[]> {
    if (!this.cashedPodcasts$) {
      const urlSearch = `${this.API_URL_SEARCH}?key=${this.API_KEY}&type=video&maxResults=50&q=${query}`;

      this.cashedPodcasts$ = this.http.get<ResponseClientSearch>(urlSearch).pipe(
        retry(3),
        map(({ items }) => {
          this.dataIds = items
            .filter((item) => item.id.kind === 'youtube#video')
            .map((item) => item.id.videoId);

          return items;
        }),
        catchError(this.handleError<Podcast[]>('getPodcast', [])),
        mergeMap(() => {
          const urlVideos = `${this.API_URL_VIDEOS}?key=${this.API_KEY}&id=${this.dataIds.join(
            ',',
          )}&part=snippet,statistics&maxResults=50`;

          return this.http.get<ResponseClientVideo>(urlVideos).pipe(
            retry(3),
            map(({ items }) => {
              return items.map((podcast: ClientItemVideo): Podcast => {
                return new Podcast(
                  podcast.id,
                  podcast.snippet.title,
                  podcast.snippet.description,
                  podcast.snippet.thumbnails.high.url,
                  podcast.snippet.publishedAt,
                  podcast.statistics.viewCount,
                  podcast.statistics.likeCount,
                  podcast.statistics.favoriteCount,
                  podcast.statistics.commentCount,
                  podcast.snippet.thumbnails.default.width,
                  podcast.snippet.thumbnails.default.height,
                );
              });
            }),
            catchError(this.handleError<Podcast[]>('getPodcast', [])),
          );
        }),
        shareReplay(1),
      );
    }

    return this.cashedPodcasts$;
  }

  /** Log a PodcastService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`PodcastService: ${message}`);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  public getPodcastsById(id: string, query: string): Observable<Podcast | undefined> {
    return this.getPodcasts(query).pipe(
      map((podcasts: Podcast[]) => {
        return podcasts.find((podcast) => {
          return podcast.id === id;
        });
      }),
    );
  }

  // /* GET podcasts whose title contains search term */
  // searchPodcasts(term: string): Observable<Podcast[]> {
  //   if (!term.trim() && term.length < 3) {
  //     // if not search term, return empty podcast array.
  //     return of([]);
  //   }
  //   return this.http.get<Podcast[]>(`${this.podcastUrl}/?title=${term}`).pipe(
  //   tap(x => x.length ?
  //      this.log(`found podcasts matching "${term}"`) :
  //      this.log(`no podcasts matching "${term}"`)),
  //   catchError(this.handleError<Podcast[]>('searchPodcasts', []))
  //   );
  // }

  // getHeroNo404<Data>(id: number): Observable<Podcast> {
  //   const url = `${this.podcastUrl}/?id=${id}`;
  //   return this.http.get<Podcast[]>(url)
  //     .pipe(
  //       map(heroes => heroes[0]), // returns a {0|1} element array
  //       tap(h => {
  //         const outcome = h ? 'fetched' : 'did not find';
  //         this.log(`${outcome} hero id=${id}`);
  //       }),
  //       catchError(this.handleError<Podcast>(`getHero id=${id}`))
  //     );
  // }
}
