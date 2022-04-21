export class Podcast {
  constructor(
    readonly id: string,
    readonly title: string,
    readonly description: string,
    readonly preview: string,
    readonly publishedAt: string,
    readonly viewCount: string,
    readonly likeCount: string,
    readonly favoriteCount: string,
    readonly commentCount: string,
    readonly width?: number,
    readonly height?: number,
    readonly video?: string,
  ) {}
}

export type PodcastCustom = Pick<
  Podcast,
  'id' | 'title' | 'description' | 'publishedAt' | 'preview' | 'video'
>;
