import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { mockResponse } from 'src/app/mocks/mock-response';
import { Podcast } from '../models/podcast-model';
import { ClientItem } from '../models/response-client.model';
import { MessageService } from './message.service';

const podcastsMock: Array<ClientItem> = mockResponse.items;

@Injectable({
  providedIn: 'root',
})
export class PodcastService {
  constructor(private messageService: MessageService) {}

  public getPodcasts(): Observable<Podcast[]> {
    this.messageService.add('PodcastService: fetched podcasts');
    return of(
      podcastsMock.map(
        (podcast) =>
          new Podcast(
            podcast.id,
            podcast.snippet.title,
            podcast.snippet.description,
            podcast.statistics.viewCount,
            podcast.statistics.likeCount,
            podcast.statistics.dislikeCount,
            podcast.statistics.commentCount,
            podcast.snippet.thumbnails.high.url,
            podcast.snippet.publishedAt,
            podcast.snippet.thumbnails.default.width,
            podcast.snippet.thumbnails.default.height,
          ),
      ),
    );
  }

  public getPodcastsById(id: string): Observable<Podcast | undefined> {
    return this.getPodcasts().pipe(
      map((podcasts: Podcast[]) => podcasts.find((podcast) => podcast.id === id)),
    );
  }
}
