import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Podcast } from '../models/podcast-model';
import { ClientItem, ResponseClient } from '../models/response-client.model';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  constructor(private messageService: MessageService, private http: HttpClient) {}

  // private podcastUrl: string = 'https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDPP5Mu7kGql38pphvYV7KkK9BrVs3Jx4s&part=snippet,statistics&maxResults=15';

  private podcastUrlMock = 'assets/mock.json';

  public getPodcasts(): Observable<Podcast[]> {
    return this.http.get<ResponseClient>(this.podcastUrlMock).pipe(
      map(({ items }) => {
        return items.map((podcast: ClientItem): Podcast => {
          return new Podcast(
            podcast.id,
            podcast.snippet.title,
            podcast.snippet.description,
            podcast.statistics.viewCount,
            podcast.statistics.likeCount,
            podcast.statistics.favoriteCount,
            podcast.statistics.commentCount,
            podcast.snippet.thumbnails.high.url,
            podcast.snippet.publishedAt,
            podcast.snippet.thumbnails.default.width,
            podcast.snippet.thumbnails.default.height,
          );
        });
      }),
      catchError(this.handleError<Podcast[]>('getPodcast', [])),
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

  public getPodcastsById(id: string): Observable<Podcast | undefined> {
    return this.getPodcasts().pipe(
      map((podcasts: Podcast[]) => podcasts.find((podcast) => podcast.id === id)),
    );
  }
}
