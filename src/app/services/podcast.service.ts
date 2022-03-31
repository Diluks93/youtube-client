import { Injectable } from '@angular/core';
import { mockResponse } from '../mocks/mock-response';

const podcasts = mockResponse.items;
export class Podcast {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly viewCount: string,
    readonly likeCount: string,
    readonly dislikeCount: string,
    readonly commentCount: string,
    readonly preview: string,
    readonly publishedAt: string,
    readonly width?: number,
    readonly height?: number,
    readonly tags?: Array<string>,
  ) {}
}

@Injectable()
export class PodcastService {
  public getPodcasts(): Array<Podcast> {
    return podcasts.map(
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
          podcast.snippet.tags,
        ),
    );
  }

  public getPodcastsById(PodcastId: string) {
    return podcasts.find((podcast) => podcast.id === PodcastId);
  }
}
