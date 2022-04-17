import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, of } from 'rxjs';
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
  constructor(
    private messageService: MessageService,
    private http: HttpClient,
    private router: Router,
  ) {}

  private SEARCH = 'search/';

  private VIDEOS = 'videos/';

  private dataIds: string[] = [];

  public getPodcasts(query: string): Observable<Podcast[]> {
    const urlSearch = `${this.SEARCH}&q=${query}`;

    return this.http.get<ResponseClientSearch>(urlSearch).pipe(
      retry(3),
      map(({ items }) => {
        this.dataIds = items
          .filter((item) => item.id.kind === 'youtube#video')
          .map((item) => item.id.videoId);

        return items;
      }),
      catchError(this.handleError<Podcast[]>('getPodcast', [])),
      mergeMap(() => {
        const urlVideos = `${this.VIDEOS}&id=${this.dataIds.join(',')}`;

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
    );
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

  public getPodcastsById(id: string, query: string): Observable<unknown> {
    return this.getPodcasts(query).pipe(
      map((podcasts: Podcast[]) => {
        return (
          podcasts.find((podcast) => {
            return podcast.id === id;
          }) ?? this.router.navigate(['404'])
        );
      }),
    );
  }
}
