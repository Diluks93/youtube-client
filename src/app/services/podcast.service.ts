import { Injectable } from '@angular/core';
import { mockResponse } from '../mocks/mock-response';

const podcasts = mockResponse.items;
export class Podcast {
  constructor(
    public id: string,
    public channelTitle: string,
    public description: string,
    public viewCount: string,
    public likeCount: string,
    public dislikeCount: string,
    public commentCount: string,
    public preview: string,
    public publishedAt: string,
    public width?: number,
    public height?: number,
  ) {}
}

@Injectable()
export class PodcastService {
  getPodcasts(): Array<Podcast> {
    return podcasts.map(
      (podcast) =>
        new Podcast(
          podcast.id,
          podcast.snippet.channelTitle,
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
    );
  }

  getPodcastsById(PodcastId: string) {
    return podcasts.find((podcast) => podcast.id === PodcastId);
  }
}
